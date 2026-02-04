// Popup Coordinator - Manages timing and display of multiple popups
// Prevents popup overlap and ensures good UX

type PopupType = 'exit-intent' | 'quick-lead' | 'promo' | 'other'

interface PopupState {
  lastShown: number | null
  hasShown: boolean
}

class PopupCoordinator {
  private state: Map<PopupType, PopupState> = new Map()
  private activePopup: PopupType | null = null
  private minTimeBetweenPopups = 30000 // 30 seconds minimum between any popups
  private sessionStorageKey = 'popup-coordinator-state'

  constructor() {
    this.loadState()
  }

  private loadState() {
    if (typeof window === 'undefined') return

    try {
      const saved = sessionStorage.getItem(this.sessionStorageKey)
      if (saved) {
        const data = JSON.parse(saved)
        this.state = new Map(Object.entries(data) as [PopupType, PopupState][])
      }
    } catch (e) {
      console.error('Error loading popup state:', e)
    }
  }

  private saveState() {
    if (typeof window === 'undefined') return

    try {
      const data = Object.fromEntries(this.state)
      sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving popup state:', e)
    }
  }

  private getState(type: PopupType): PopupState {
    if (!this.state.has(type)) {
      this.state.set(type, { lastShown: null, hasShown: false })
    }
    return this.state.get(type)!
  }

  // Check if a popup can be shown
  canShow(type: PopupType, allowRecurring: boolean = false): boolean {
    const state = this.getState(type)
    const now = Date.now()

    // For non-recurring popups, check if already shown
    if (!allowRecurring && state.hasShown) {
      return false
    }

    // If there's an active popup
    if (this.activePopup && this.activePopup !== type) {
      return false
    }

    // Check minimum time between popups
    const anyRecentPopup = Array.from(this.state.values()).some(
      s => s.lastShown && (now - s.lastShown) < this.minTimeBetweenPopups
    )

    if (anyRecentPopup) {
      return false
    }

    return true
  }

  // Register that a popup is being shown
  show(type: PopupType, isRecurring: boolean = false) {
    const state = this.getState(type)
    state.lastShown = Date.now()
    // Only mark as permanently shown for non-recurring popups
    if (!isRecurring) {
      state.hasShown = true
    }
    this.activePopup = type
    this.saveState()
  }

  // Register that a popup has been closed
  close(type: PopupType) {
    if (this.activePopup === type) {
      this.activePopup = null
    }
    this.saveState()
  }

  // Check if any popup has been shown
  hasAnyPopupBeenShown(): boolean {
    return Array.from(this.state.values()).some(s => s.hasShown)
  }

  // Reset all popups (for testing)
  reset() {
    this.state.clear()
    this.activePopup = null
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(this.sessionStorageKey)
    }
  }
}

// Singleton instance
const popupCoordinator = new PopupCoordinator()

export default popupCoordinator
