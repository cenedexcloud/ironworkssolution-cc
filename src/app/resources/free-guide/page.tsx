'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function FreeGuidePage() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print Button - Hidden when printing */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <Button
          onClick={handleDownload}
          className="bg-[#C41E3A] hover:bg-[#a01830] text-white px-4 md:px-6 py-2 md:py-3 text-base md:text-lg shadow-lg"
        >
          Download PDF
        </Button>
      </div>

      {/* Page 1: Cover */}
      <div className="min-h-screen bg-black flex flex-col md:flex-row items-center print:page-break-after-always">
        <div className="w-full md:w-1/2 p-6 md:p-16">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-8 leading-tight">
            Free Guide: 5 Ways to Boost Curb Appeal with Iron Fencing
          </h1>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed">
            Premium quality expert craftsmanship meets lasting value. Transform your home, increase property value, and enhance beauty with Iron Works Solution — your premier iron fencing partner in California.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-screen">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            alt="Modern home with iron fencing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Page 2: Introduction */}
      <div className="min-h-screen bg-black p-6 md:p-16 flex flex-col justify-center print:page-break-after-always">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-12">
          First Impressions Matter — Make Yours Unforgettable
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="text-white text-base md:text-lg leading-relaxed space-y-6">
            <p>
              Your property's exterior is the first thing visitors, neighbors, and potential buyers notice. Iron fencing isn't just about security — it's a powerful design element that can dramatically transform your home's aesthetic appeal and property value.
            </p>
            <p>
              In this comprehensive guide, we'll reveal five proven strategies our master craftsmen use to help homeowners across California elevate their curb appeal with custom ironwork. Whether you're planning a renovation or looking for one impactful upgrade, these insights will help you make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-bold text-white mb-2 md:mb-4">15%</div>
              <div className="text-white text-lg md:text-xl font-semibold mb-2">Property Value Increase</div>
              <div className="text-gray-400 text-sm md:text-base">Premium iron fencing can boost your home's value</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-bold text-white mb-2 md:mb-4">30+</div>
              <div className="text-white text-lg md:text-xl font-semibold mb-2">Years of Beauty</div>
              <div className="text-gray-400 text-sm md:text-base">Powder-coated iron fencing lasts with minimal maintenance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 3: Strategy #1 */}
      <div className="min-h-screen bg-black p-6 md:p-16 print:page-break-after-always">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Strategy #1: Choose the Right Style</h2>
        <h3 className="text-xl md:text-2xl text-[#C41E3A] mb-6 md:mb-12">Match Your Home's Architecture</h3>

        <p className="text-white text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
          Your iron fence should complement your home's architectural style to create a cohesive, intentional design. The right match enhances your property's character while the wrong choice can detract from even the most beautiful home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-[#C41E3A] p-6 md:p-8 rounded">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Traditional & Colonial</h4>
            <p className="text-white leading-relaxed text-sm md:text-base">
              Classic vertical picket designs with decorative finials and symmetrical patterns. These timeless styles honor heritage while adding elegance and sophistication to established neighborhoods.
            </p>
          </div>

          <div className="bg-[#C41E3A] p-6 md:p-8 rounded">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Modern & Contemporary</h4>
            <p className="text-white leading-relaxed text-sm md:text-base">
              Clean lines are key. Horizontal bar designs, minimalist vertical slats, or geometric patterns. Matte black finishes create a striking, sophisticated look that complements sleek architecture.
            </p>
          </div>

          <div className="bg-[#C41E3A] p-6 md:p-8 rounded">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Mediterranean & Spanish Revival</h4>
            <p className="text-white leading-relaxed text-sm md:text-base">
              Ornate scrollwork, curved elements, and wrought iron details with Old World charm. Bronze or copper finishes enhance authenticity and warmth.
            </p>
          </div>

          <div className="bg-[#C41E3A] p-6 md:p-8 rounded">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Craftsman Bungalows</h4>
            <p className="text-white leading-relaxed text-sm md:text-base">
              Simple, functional designs with subtle decorative elements. Square or rectangular patterns work beautifully with the honest, handcrafted aesthetic of these beloved homes.
            </p>
          </div>
        </div>

        <div className="bg-[#5a1520] border-2 border-[#C41E3A] rounded p-4 md:p-6">
          <p className="text-white text-sm md:text-base">
            <strong className="text-base md:text-lg">Pro Tip:</strong> Bring photos of your home to your consultation appointment. Our designers will create custom mockups showing exactly how different fence styles will complement your specific architecture.
          </p>
        </div>
      </div>

      {/* Page 4: Strategy #2 */}
      <div className="min-h-screen bg-black p-6 md:p-16 print:page-break-after-always">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Strategy #2: Select a Stunning Finish</h2>
        <h3 className="text-xl md:text-2xl text-[#C41E3A] mb-6 md:mb-12">Make a Statement with Color & Protection</h3>

        <p className="text-white text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
          The finish you choose dramatically impacts both visual appeal and longevity. Modern powder coating technology provides superior protection while offering extensive design flexibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="border-2 border-[#C41E3A] bg-[#1a1a1a] p-6 md:p-8 rounded">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Classic Matte Black</h4>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              The most popular choice, providing timeless elegance that never goes out of style. Pairs beautifully with any home color scheme and hides minor imperfections perfectly while maintaining a sophisticated appearance.
            </p>
          </div>

          <div className="border-2 border-[#C41E3A] bg-[#1a1a1a] p-6 md:p-8 rounded">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Bronze & Copper Tones</h4>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Perfect for Mediterranean or Spanish architecture, these warm metallic finishes create an upscale, established appearance. The rich tones develop beautiful character over time and complement earth-toned exteriors.
            </p>
          </div>

          <div className="border-2 border-[#C41E3A] bg-[#1a1a1a] p-6 md:p-8 rounded">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Custom Color Matching</h4>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Match your fence to architectural details like window frames, shutters, or trim. Creates a cohesive, designer look that appears intentionally planned rather than added as an afterthought.
            </p>
          </div>

          <div className="border-2 border-[#C41E3A] bg-[#1a1a1a] p-6 md:p-8 rounded">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Two-Tone Designs</h4>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              For maximum visual impact, combine complementary colors. Popular combinations include black rails with bronze decorative elements, or dark base sections with lighter top rails for architectural interest.
            </p>
          </div>
        </div>

        <div className="bg-[#C41E3A] rounded p-4 md:p-6">
          <p className="text-white text-sm md:text-base">
            <strong className="text-base md:text-lg">Pro Tip:</strong> Powder coating provides 10x the protection of traditional paint, resisting chipping, fading, and corrosion for decades with minimal maintenance required.
          </p>
        </div>
      </div>

      {/* Page 5: Strategy #3 */}
      <div className="min-h-screen bg-black p-6 md:p-16 print:page-break-after-always">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Strategy #3: Add Architectural Details</h2>
        <h3 className="text-xl md:text-2xl text-[#C41E3A] mb-6 md:mb-12">The Details That Wow</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <p className="text-white text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              The difference between ordinary and extraordinary iron fencing lies in the thoughtful details. These elements transform functional barriers into artistic statements that capture attention and admiration.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="border-l-4 border-[#C41E3A] pl-3 md:pl-4">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">Custom Finials & Post Caps</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Decorative toppers add vertical interest and define your style. Choose from classic spear points, elegant fleur-de-lis, traditional ball designs, or commission completely custom shapes.
                </p>
              </div>

              <div className="border-l-4 border-[#C41E3A] pl-3 md:pl-4">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">Scrollwork & Ornamental Elements</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Hand-forged scrolls and decorative panels transform basic fencing into artistic statements. Position strategically at gates or create repeating patterns throughout.
                </p>
              </div>

              <div className="border-l-4 border-[#C41E3A] pl-3 md:pl-4">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">Integrated Lighting</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  LED post cap lights or mounted downlights illuminate your fence at night, creating ambiance while improving security and highlighting your investment.
                </p>
              </div>

              <div className="border-l-4 border-[#C41E3A] pl-3 md:pl-4">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">Planters & Ring Holders</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Attached iron planters allow seasonal flowers and greenery, softening metal with natural elements and adding welcoming color year-round.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <img
              src="https://images.unsplash.com/photo-1760078626283-ae761e2d9431?w=800&q=80"
              alt="Ornamental iron fence with intricate scrollwork and architectural details"
              className="w-full rounded-lg mb-4 md:mb-6"
            />
            <div className="bg-[#5a1520] border-2 border-[#C41E3A] rounded p-3 md:p-4">
              <p className="text-white text-xs md:text-sm">
                <strong>Pro Tip:</strong> Architectural details can increase perceived property value by 30-40% according to real estate professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 6: Strategy #4 */}
      <div className="min-h-screen bg-black p-6 md:p-16 print:page-break-after-always">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Strategy #4: Create a Grand Entrance</h2>
        <h3 className="text-xl md:text-2xl text-[#C41E3A] mb-6 md:mb-12">Statement Gates That Command Attention</h3>

        <p className="text-white text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
          Your gate is the focal point of your entire fencing installation — the element that makes the strongest first impression. Make those crucial seconds count with thoughtful design and premium features.
        </p>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <div className="bg-[#C41E3A] p-4 md:p-6 rounded flex items-start gap-3 md:gap-4">
            <div className="bg-black rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-[#C41E3A] text-xl md:text-2xl font-bold">1</span>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Size & Proportion</h4>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Gates must be properly scaled to fence height and property size. Our professional designers ensure perfect proportions that feel neither overwhelming nor underwhelming for your specific home.
              </p>
            </div>
          </div>

          <div className="bg-[#C41E3A] p-4 md:p-6 rounded flex items-start gap-3 md:gap-4">
            <div className="bg-black rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-[#C41E3A] text-xl md:text-2xl font-bold">2</span>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Automation Adds Luxury</h4>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Electric gates with remote or smartphone control provide unmatched convenience, enhanced security, and immediate "wow factor" that impresses visitors and potential buyers alike.
              </p>
            </div>
          </div>

          <div className="bg-[#C41E3A] p-4 md:p-6 rounded flex items-start gap-3 md:gap-4">
            <div className="bg-black rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-[#C41E3A] text-xl md:text-2xl font-bold">3</span>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Decorative Gate Features</h4>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Consider elegant arch tops, custom monograms that showcase your family, address numbers in decorative fonts, or themed designs reflecting your personality and interests.
              </p>
            </div>
          </div>

          <div className="bg-[#C41E3A] p-4 md:p-6 rounded flex items-start gap-3 md:gap-4">
            <div className="bg-black rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-[#C41E3A] text-xl md:text-2xl font-bold">4</span>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Dual Swing vs. Single</h4>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Double swing gates create impressive symmetry and grandeur perfect for wide driveways. Single gates work better for limited space and reduce automation costs while maintaining style.
              </p>
            </div>
          </div>

          <div className="bg-[#C41E3A] p-4 md:p-6 rounded flex items-start gap-3 md:gap-4">
            <div className="bg-black rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-[#C41E3A] text-xl md:text-2xl font-bold">5</span>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Premium Hardware</h4>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Hinges, latches, and handles should match your fence in quality and finish. Heavy-duty hardware ensures smooth operation and longevity while enhancing the overall aesthetic.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#5a1520] border-2 border-[#C41E3A] rounded p-4 md:p-6">
          <p className="text-white text-sm md:text-base">
            <strong className="text-base md:text-lg">Pro Tip:</strong> The gate is where visitors naturally pause before entering your property — make those precious seconds truly memorable with distinctive design.
          </p>
        </div>
      </div>

      {/* Page 7: Strategy #5 */}
      <div className="min-h-screen bg-black p-6 md:p-16 print:page-break-after-always">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Strategy #5: Coordinate All Elements</h2>
        <h3 className="text-xl md:text-2xl text-[#C41E3A] mb-6 md:mb-12">Unified Design Strategy for Maximum Impact</h3>

        <p className="text-white text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
          Maximum curb appeal and property value enhancement come from a unified ironwork design strategy that extends throughout your property. When all elements work together harmoniously, the result is a polished, intentional aesthetic that signals quality and attention to detail.
        </p>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="bg-[#C41E3A] w-10 h-10 md:w-12 md:h-12 rounded flex items-center justify-center flex-shrink-0 text-xl md:text-2xl">
              🏛️
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Matching Railings</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Coordinate porch steps, balcony rails, or outdoor stair railings with your fencing design. Matching patterns and finishes create visual cohesion that ties your exterior together beautifully.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="bg-[#C41E3A] w-10 h-10 md:w-12 md:h-12 rounded flex items-center justify-center flex-shrink-0 text-xl md:text-2xl">
              🪟
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Window Grilles & Shutters</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Decorative iron window treatments that echo your fence design elements create a unified exterior appearance. Security and beauty work together in these functional accents.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="bg-[#C41E3A] w-10 h-10 md:w-12 md:h-12 rounded flex items-center justify-center flex-shrink-0 text-xl md:text-2xl">
              📮
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">House Numbers & Mail Features</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Custom iron address plaques, mailbox posts, and newspaper holders in matching finishes elevate the small details that visitors notice. These touches demonstrate comprehensive attention to design.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="bg-[#C41E3A] w-10 h-10 md:w-12 md:h-12 rounded flex items-center justify-center flex-shrink-0 text-xl md:text-2xl">
              🌳
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Outdoor Structures</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Iron pergolas, garden arbors, or decorative trellises using similar design language extend your aesthetic throughout the landscape, creating outdoor rooms with consistent style.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="bg-[#C41E3A] w-10 h-10 md:w-12 md:h-12 rounded flex items-center justify-center flex-shrink-0 text-xl md:text-2xl">
              🪑
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Furniture & Accents</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Coordinate outdoor iron furniture, decorative planters, and light fixtures to complete the picture. Every element contributes to the overall impression of sophisticated design.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#5a1520] border-2 border-[#C41E3A] rounded p-4 md:p-6">
          <p className="text-white text-sm md:text-base">
            <strong className="text-base md:text-lg">Pro Tip:</strong> A unified design approach signals quality craftsmanship to potential buyers and can positively influence property valuations by thousands of dollars.
          </p>
        </div>
      </div>

      {/* Page 8: Why Choose Us */}
      <div className="min-h-screen bg-black p-6 md:p-16 print:page-break-after-always">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-center">The Iron Works Solution Difference</h2>
        <h3 className="text-xl md:text-2xl text-[#C41E3A] mb-8 md:mb-16 text-center">Why California Homeowners Choose Us</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
              alt="Iron Works Solution craftsmanship"
              className="w-full rounded-lg"
            />
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-[#C41E3A] text-2xl md:text-3xl">🏆</div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Master Craftsmanship</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Our team brings decades of experience and artistic vision to every project, ensuring exceptional quality and attention to detail.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-[#C41E3A] text-2xl md:text-3xl">🤝</div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Personalized Service</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  We partner with you from initial consultation through installation, creating custom solutions perfectly suited to your home and vision.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-[#C41E3A] text-2xl md:text-3xl">✓</div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Licensed & Insured</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Fully licensed contractors with comprehensive insurance protection and BBB A+ rating give you complete peace of mind.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-[#C41E3A] text-2xl md:text-3xl">📍</div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Local Expertise</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  We understand California architecture, climate considerations, and local regulations to ensure perfect results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 9: Next Steps */}
      <div className="min-h-screen bg-black p-6 md:p-16 flex items-center print:page-break-after-always">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">Ready to Transform Your Property?</h2>
            <p className="text-white text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              These five strategies have helped hundreds of California homeowners create stunning first impressions and significantly increase their property values. But every home is unique, and the best results come from personalized design consultation tailored to your specific needs and vision.
            </p>
            <p className="text-white text-base md:text-lg leading-relaxed">
              We invite you to schedule a complimentary on-site evaluation where our master craftsmen will provide expert guidance and transparent recommendations.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <div className="bg-[#C41E3A] p-4 md:p-6 rounded">
              <div className="text-white text-2xl md:text-3xl mb-2 md:mb-3">🏡</div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Property Assessment</h4>
              <p className="text-white text-sm md:text-base">Evaluate your home's architectural style and specific needs</p>
            </div>

            <div className="bg-[#C41E3A] p-4 md:p-6 rounded">
              <div className="text-white text-2xl md:text-3xl mb-2 md:mb-3">🎨</div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Design Recommendations</h4>
              <p className="text-white text-sm md:text-base">Professional suggestions with custom mockups showing options</p>
            </div>

            <div className="bg-[#C41E3A] p-4 md:p-6 rounded">
              <div className="text-white text-2xl md:text-3xl mb-2 md:mb-3">💰</div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Transparent Pricing</h4>
              <p className="text-white text-sm md:text-base">Detailed quotes with no hidden costs or surprises</p>
            </div>

            <div className="bg-[#C41E3A] p-4 md:p-6 rounded">
              <div className="text-white text-2xl md:text-3xl mb-2 md:mb-3">📁</div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Portfolio Review</h4>
              <p className="text-white text-sm md:text-base">View similar completed projects in your area</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 10: Contact */}
      <div className="min-h-screen bg-black p-6 md:p-16 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8">
          Schedule Your Free Consultation Today
        </h2>
        <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl">
          Visit our website or call to get started on your dream project. Let's create something extraordinary together.
        </p>

        <div className="bg-[#1a1a1a] border-4 border-[#C41E3A] rounded-lg p-8 md:p-12 mb-8 md:mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Iron Works Solution</h3>
          <p className="text-xl md:text-2xl text-[#C41E3A] font-semibold mb-4 md:mb-6">Premium Custom Ironwork</p>
          <p className="text-lg md:text-xl text-white mb-4 md:mb-6">Serving Southern California</p>

          {/* QR Code */}
          <div className="mb-4 md:mb-6">
            <div className="inline-block p-4 bg-white rounded-lg">
              <img
                src="/QR_code.jpg"
                alt="QR Code to visit Iron Works Solution website"
                width={150}
                height={150}
                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px]"
              />
            </div>
            <p className="text-xs md:text-sm text-gray-400 mt-2">Scan to visit our website</p>
          </div>

          <p className="text-base md:text-lg text-gray-400">License #1141599</p>
        </div>

        <div className="w-full max-w-2xl border-t-2 border-[#C41E3A] pt-6 md:pt-8">
          <p className="text-gray-400 text-xs md:text-sm mb-4">
            © 2025 Iron Works Solution. All rights reserved.
          </p>
          <a
            href="https://tradeblaze.net"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 mt-4 hover:opacity-80 transition-opacity"
          >
            <img
              src="/tradeblaze.jpg"
              alt="TradeBLAZE"
              className="h-5 md:h-6 object-contain"
            />
            <span className="text-gray-400 text-xs md:text-sm hover:text-gray-300 transition-colors">tradeblaze.net</span>
          </a>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }

          * {
            box-sizing: border-box;
          }

          html, body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            margin: 0;
            padding: 0;
            width: 100%;
          }

          /* Force page breaks after each section */
          .print\\:page-break-after-always {
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            overflow: hidden;
            max-height: 297mm;
          }

          /* Prevent breaking inside these elements */
          h1, h2, h3, h4, h5, h6 {
            page-break-after: avoid !important;
            break-after: avoid !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Keep paragraphs together */
          p {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            orphans: 3;
            widows: 3;
          }

          /* Keep all content boxes together */
          .bg-\\[\\#C41E3A\\],
          .bg-\\[\\#5a1520\\],
          .bg-\\[\\#1a1a1a\\],
          .border-2,
          .border-l-4,
          .border-4,
          .rounded {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Keep list items together */
          .space-y-4 > *,
          .space-y-6 > *,
          .space-y-8 > * {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Ensure images don't break */
          img {
            max-width: 100%;
            height: auto;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            display: block;
          }

          /* Keep grid layouts together */
          .grid {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          .grid > * {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Ensure flex containers don't break */
          .flex {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Aggressively reduce spacing in print to fit content */
          .p-16 {
            padding: 2rem !important;
          }

          .p-12 {
            padding: 1.5rem !important;
          }

          .p-8 {
            padding: 1rem !important;
          }

          .p-6 {
            padding: 0.75rem !important;
          }

          .mb-16 {
            margin-bottom: 1.5rem !important;
          }

          .mb-12 {
            margin-bottom: 1.25rem !important;
          }

          .mb-8 {
            margin-bottom: 1rem !important;
          }

          .mb-6 {
            margin-bottom: 0.75rem !important;
          }

          .mb-4 {
            margin-bottom: 0.5rem !important;
          }

          .mb-3 {
            margin-bottom: 0.375rem !important;
          }

          .mb-2 {
            margin-bottom: 0.25rem !important;
          }

          .gap-16 {
            gap: 1.25rem !important;
          }

          .gap-12 {
            gap: 1rem !important;
          }

          .gap-6 {
            gap: 0.75rem !important;
          }

          .gap-4 {
            gap: 0.5rem !important;
          }

          /* Adjust text sizes for better fit */
          .text-7xl {
            font-size: 3rem !important;
            line-height: 1.1 !important;
          }

          .text-6xl {
            font-size: 2.5rem !important;
            line-height: 1.1 !important;
          }

          .text-5xl {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }

          .text-4xl {
            font-size: 1.75rem !important;
            line-height: 1.2 !important;
          }

          .text-3xl {
            font-size: 1.5rem !important;
          }

          .text-2xl {
            font-size: 1.25rem !important;
          }

          .text-xl {
            font-size: 1.1rem !important;
          }

          .text-lg {
            font-size: 1rem !important;
          }

          .leading-relaxed {
            line-height: 1.5 !important;
          }

          .leading-tight {
            line-height: 1.2 !important;
          }
        }
      `}</style>
    </div>
  );
}
