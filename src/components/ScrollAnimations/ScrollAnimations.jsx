import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Mounts once in App.jsx — sets up all scroll-triggered animations
 * for every section on the page using GSAP ScrollTrigger.
 */
const ScrollAnimations = () => {
  useEffect(() => {
    // Small delay to let DOM fully render
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {

        /* ── 1. Section titles ── */
        gsap.utils.toArray('.section-title').forEach((el) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
            y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
          });
        });

        /* ── 2. Section subtitles / descriptions ── */
        gsap.utils.toArray('.results-subtitle, .articles-subtitle, .whyus-subtitle').forEach((el) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
            y: 24, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power2.out',
          });
        });

        /* ── 3. Stat cards — staggered ── */
        const statCards = gsap.utils.toArray('.result-stat-card');
        if (statCards.length) {
          gsap.from(statCards, {
            scrollTrigger: { trigger: statCards[0], start: 'top 85%', toggleActions: 'play none none none' },
            y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          });
        }

        /* ── 4. Trade rows (results table) ── */
        const tradeRows = gsap.utils.toArray('.trade-row');
        if (tradeRows.length) {
          gsap.from(tradeRows, {
            scrollTrigger: { trigger: '.results-trades-wrapper', start: 'top 82%', toggleActions: 'play none none none' },
            x: -30, opacity: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out',
          });
        }

        /* ── 5. Results CTA banner ── */
        const ctaBanner = document.querySelector('.results-cta-banner');
        if (ctaBanner) {
          gsap.from(ctaBanner, {
            scrollTrigger: { trigger: ctaBanner, start: 'top 88%', toggleActions: 'play none none none' },
            y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
          });
        }

        /* ── 6. Article cards — staggered grid ── */
        const articleCards = gsap.utils.toArray('.article-card');
        if (articleCards.length) {
          gsap.from(articleCards, {
            scrollTrigger: { trigger: '.articles-grid', start: 'top 85%', toggleActions: 'play none none none' },
            y: 60, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          });
        }

        /* ── 7. WhyUs skill bars trigger ── (bar widths animated via CSS, just reveal the card) */
        const skillsCard = document.querySelector('.whyus-skills-card');
        if (skillsCard) {
          gsap.from(skillsCard, {
            scrollTrigger: { trigger: skillsCard, start: 'top 85%', toggleActions: 'play none none none' },
            x: -50, opacity: 0, duration: 1, ease: 'power3.out',
          });
        }

        /* ── 8. WhyUs right panel (tabs) ── */
        const whyRight = document.querySelector('.whyus-right');
        if (whyRight) {
          gsap.from(whyRight, {
            scrollTrigger: { trigger: whyRight, start: 'top 85%', toggleActions: 'play none none none' },
            x: 50, opacity: 0, duration: 1, ease: 'power3.out',
          });
        }

        /* ── 9. WhyUs pills ── */
        const pills = gsap.utils.toArray('.whyus-pill');
        if (pills.length) {
          gsap.from(pills, {
            scrollTrigger: { trigger: '.whyus-pills-row', start: 'top 90%', toggleActions: 'play none none none' },
            y: 20, opacity: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out',
          });
        }

        /* ── 10. Pricing cards ── */
        const pricingCards = gsap.utils.toArray('.pricing-card, .price-card');
        if (pricingCards.length) {
          gsap.from(pricingCards, {
            scrollTrigger: { trigger: pricingCards[0], start: 'top 85%', toggleActions: 'play none none none' },
            y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          });
        }

        /* ── 11. Community section ── */
        const community = document.querySelector('.community-section');
        if (community) {
          gsap.from(community, {
            scrollTrigger: { trigger: community, start: 'top 85%', toggleActions: 'play none none none' },
            y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
          });
        }

        /* ── 12. Footer ── */
        const footer = document.querySelector('.footer-neon');
        if (footer) {
          gsap.from(footer, {
            scrollTrigger: { trigger: footer, start: 'top 95%', toggleActions: 'play none none none' },
            y: 30, opacity: 0, duration: 0.8, ease: 'power2.out',
          });
        }

        /* ── 13. Navbar — subtle slide down on load ── */
        gsap.from('.navbar', {
          y: -60, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.1,
        });

        /* ── 14. Top banner ── */
        gsap.from('.top-banner', {
          y: -30, opacity: 0, duration: 0.6, ease: 'power2.out',
        });

      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null; // renders nothing, just sets up animations
};

export default ScrollAnimations;
