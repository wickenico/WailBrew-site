'use client';

import { GitHubIcon, DownloadIcon, CommandLineIcon, SparklesIcon, ShieldCheckIcon, CubeIcon, ArrowUpIcon } from '@/components/icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu-item[data-section]');
    
    function updateActiveSection() {
      let current = '';
      sections.forEach(section => {
        const htmlElement = section as HTMLElement;
        const sectionTop = htmlElement.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          const sectionId = section.getAttribute('id');
          if (sectionId) {
            current = sectionId;
          }
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
          link.classList.add('active');
        }
      });
    }

    function handleScroll() {
      updateActiveSection();
      // Show back to top button when user scrolls down 300px
      setShowBackToTop(window.scrollY > 300);
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
        <Image
                  src="/logo.png"
                  alt="WailBrew Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">WailBrew</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {/* Navigation Links */}
              <div className="flex items-center space-x-8 mr-8">
                <a 
                  href="#features" 
                  className="nav-menu-item"
                  data-section="features"
                >
                  Features
                </a>
                <a 
                  href="#download" 
                  className="nav-menu-item"
                  data-section="download"
                >
                  Download
          </a>
          <a
                  href="#screenshots" 
                  className="nav-menu-item"
                  data-section="screenshots"
                >
                  Screenshots
          </a>
        </div>
              
              {/* Separator */}
              <div className="w-px h-6 bg-[var(--border-light)] mr-8"></div>
              
              {/* GitHub Button */}
              <a 
                href="https://github.com/wickenico/WailBrew" 
                className="nav-github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
                <GitHubIcon className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center hero-bg pt-20">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="text-center space-y-8">
            <div className="animate-fade-in-up">
              <div className="flex justify-center mb-8 animate-scale-in">
                <div className="relative">
          <Image
                    src="/logo.png"
                    alt="WailBrew Logo"
                    width={120}
                    height={120}
                    className="object-contain drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full blur-xl opacity-20 animate-pulse"></div>
                </div>
              </div>
              <h1 className="text-display gradient-text mb-6 animate-fade-in-up-delay-1 hero-text-title">
                WailBrew
              </h1>
              <div className="mb-12">
                <p className="text-body-large max-w-3xl mx-auto animate-fade-in-up-delay-2 leading-relaxed hero-text-description">
                  A minimalistic and beautiful GUI for Homebrew package management on macOS. 
                  Experience the power of command-line tools through an intuitive, modern interface.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delay-3">
                <a href="#download" className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4">
                  <DownloadIcon className="w-5 h-5" />
                  Download Now
                </a>
                <a href="https://github.com/wickenico/WailBrew" className="btn-secondary inline-flex items-center gap-3 text-lg px-8 py-4">
                  <GitHubIcon className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[var(--border-light)] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[var(--primary)] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section id="features" className="section-padding bg-[var(--surface)]">
        <div className="w-full flex justify-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
            <div className="text-center mb-28">
              <h2 className="text-heading mb-10 animate-fade-in-up section-text">Designed To Be Awesome</h2>
              <div className="flex justify-center">
                <p className="text-body-large max-w-4xl text-center animate-fade-in-up-delay-1 leading-relaxed section-text">
                  WailBrew brings the power of Homebrew to your fingertips with an intuitive and beautiful interface that makes package management effortless.
                </p>
              </div>
            </div>
            
            <div className="center-content">
              <div className="grid-modern">
                <div className="card animate-fade-in-up text-center">
                  <div className="icon-container mb-10 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5 border-[var(--primary)]/20 mx-auto">
                    <SparklesIcon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-subheading mb-8">Beautiful & Intuitive</h3>
                  <p className="text-body leading-relaxed">
                    A clean, modern interface that makes package management a pleasure. No more memorizing complex commands or dealing with terminal syntax.
                  </p>
                </div>
                
                <div className="card animate-fade-in-up-delay-1 text-center">
                  <div className="icon-container mb-10 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent)]/5 border-[var(--accent)]/20 mx-auto">
                    <CommandLineIcon className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-subheading mb-8">Powerful Features</h3>
                  <p className="text-body leading-relaxed">
                    Install, update, and uninstall packages with ease. Search through thousands of formulae and casks with real-time filtering and detailed information.
                  </p>
                </div>
                
                <div className="card animate-fade-in-up-delay-2 text-center">
                  <div className="icon-container mb-10 bg-gradient-to-br from-[var(--success)]/10 to-[var(--success)]/5 border-[var(--success)]/20 mx-auto">
                    <ShieldCheckIcon className="w-6 h-6 text-[var(--success)]" />
                  </div>
                  <h3 className="text-subheading mb-8">Safe & Reliable</h3>
                  <p className="text-body leading-relaxed">
                    Built on top of Homebrew&apos;s proven foundation. All operations are performed safely with comprehensive error handling and validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Homebrew Explanation */}
      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="w-full flex justify-center">
          <div className="max-w-5xl mx-auto px-8 lg:px-12 w-full">
            <div className="text-center">
              <h2 className="text-heading mb-12 animate-fade-in-up section-text">But.. What&apos;s Homebrew?</h2>
              <p className="text-body-large mb-20 animate-fade-in-up-delay-1 leading-relaxed section-text">
                Homebrew is the missing package manager for macOS (and Linux).
              </p>
              <div className="center-content">
                <div className="card animate-fade-in-up-delay-2 max-w-4xl mx-auto">
                  <div className="space-y-10 text-center">
                    <p className="text-body-large leading-relaxed">
                      With Homebrew you can install thousands of command-line applications and libraries that would require manual compilation, which is not always very straightforward.
                    </p>
                    <p className="text-body-large leading-relaxed">
                      WailBrew brings this to a whole new level of simplicity. Install command-line tools from a beautiful app with just a few clicks. Could it be easier?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Download Section */}
      <section id="download" className="section-padding bg-[var(--surface-variant)] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[var(--accent)] to-[var(--success)] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full flex justify-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-[var(--surface-elevated)] px-6 py-3 rounded-full border border-[var(--border)] mb-8 animate-fade-in-up">
                <DownloadIcon className="w-5 h-5 text-[var(--primary)]" />
                <span className="text-sm font-medium text-[var(--primary)]">Ready to get started?</span>
              </div>
              <h2 className="text-heading mb-8 animate-fade-in-up-delay-1 section-text">Download WailBrew</h2>
              <div className="flex justify-center">
                <p className="text-body-large max-w-3xl mx-auto animate-fade-in-up-delay-2 leading-relaxed section-text text-center">
                  Choose your preferred installation method and start managing your Homebrew packages with style.
                </p>
              </div>
            </div>
            
            {/* Download Options */}
            <div className="center-content mb-32">
              <div className="download-grid-enhanced">
                {/* Direct Download Card */}
                <div className="download-card-primary animate-fade-in-up">
                  <div className="download-card-header">
                    <div className="download-icon-wrapper primary">
                      <DownloadIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="download-badge">Recommended</div>
                  </div>
                  <div className="download-card-content">
                    <h3 className="text-subheading mb-4">Direct Download</h3>
                    <p className="text-body mb-8 leading-relaxed">
                      Get the latest stable release with all features included. Perfect for most users who want a simple installation.
                    </p>
                    <div className="download-stats mb-8">
                      <div className="stat-item">
                        <span className="stat-label">Version</span>
                        <span className="stat-value">Latest</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Size</span>
                        <span className="stat-value">~15 MB</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">macOS</span>
                        <span className="stat-value">11.0+</span>
                      </div>
                    </div>
                    <a href="https://github.com/wickenico/WailBrew/releases/latest" className="btn-primary inline-flex items-center gap-3 w-full justify-center px-6 py-4 text-lg">
                      <DownloadIcon className="w-5 h-5" />
                      Download for macOS
                    </a>
                  </div>
                </div>

                {/* Homebrew Installation Card */}
                <div className="download-card-secondary animate-fade-in-up-delay-1">
                  <div className="download-card-header">
                    <div className="download-icon-wrapper secondary">
                      <CommandLineIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="download-card-content">
                    <h3 className="text-subheading mb-4">Install via Homebrew</h3>
                    <p className="text-body mb-8 leading-relaxed">
                      Use Homebrew to install WailBrew. Perfect for developers who prefer command-line package management.
                    </p>
                    <div className="code-block mb-8">
                      <div className="code-header">
                        <div className="code-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <span className="code-title">Terminal</span>
                      </div>
                      <div className="code-content">
                        <code className="text-[var(--accent)]">brew install --cask wailbrew</code>
                      </div>
                    </div>
                    <div className="homebrew-benefits">
                      <div className="benefit-item">
                        <span className="benefit-icon">✓</span>
                        <span>Automatic updates</span>
                      </div>
                      <div className="benefit-item">
                        <span className="benefit-icon">✓</span>
                        <span>Easy uninstallation</span>
                      </div>
                      <div className="benefit-item">
                        <span className="benefit-icon">✓</span>
                        <span>Dependency management</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* GitHub Source Card */}
                <div className="download-card-tertiary animate-fade-in-up-delay-2">
                  <div className="download-card-header">
                    <div className="download-icon-wrapper tertiary">
                      <GitHubIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="download-card-content">
                    <h3 className="text-subheading mb-4">Build from Source</h3>
                    <p className="text-body mb-8 leading-relaxed">
                      Clone the repository and build WailBrew yourself. Perfect for developers who want to contribute or customize.
                    </p>
                    <div className="github-stats mb-8">
                      <div className="github-stat">
                        <GitHubIcon className="w-4 h-4" />
                        <span>Open Source</span>
                      </div>
                      <div className="github-stat">
                        <span className="star-icon">⭐</span>
                        <span>MIT License</span>
                      </div>
                    </div>
                    <a href="https://github.com/wickenico/WailBrew" className="btn-secondary inline-flex items-center gap-3 w-full justify-center px-6 py-4">
                      <GitHubIcon className="w-5 h-5" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Installation Notice */}
            <div className="w-full flex justify-center" style={{ marginTop: '2rem' }}>
              <div className="max-w-4xl mx-auto px-4">
                <div className="notice-card animate-fade-in-up-delay-3" style={{ marginTop: '2rem' }}>
                  <div className="notice-icon">
                    <span className="text-amber-400 text-2xl">💡</span>
                  </div>
                  <div className="notice-content">
                    <h4 className="notice-title">Before You Install</h4>
                    <p className="notice-text">
                      WailBrew requires Homebrew to be installed on your system. If you haven&apos;t installed Homebrew yet, visit{' '}
                      <a href="https://brew.sh" className="notice-link" target="_blank" rel="noopener noreferrer">
                        brew.sh
                      </a>
                      {' '}to get started. The installation is quick and straightforward.
                    </p>
                    <div className="notice-actions">
                      <a href="https://brew.sh" className="notice-button" target="_blank" rel="noopener noreferrer">
                        Install Homebrew First
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Screenshots Section */}
      <section id="screenshots" className="section-padding bg-[var(--surface)]">
        <div className="w-full flex justify-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
            <div className="text-center mb-24">
              <h2 className="text-heading mb-10 animate-fade-in-up section-text">See WailBrew in Action</h2>
              <p className="text-body-large animate-fade-in-up-delay-1 leading-relaxed section-text">
                Experience the beautiful interface and powerful features that make package management effortless.
              </p>
            </div>
            
            <div className="center-content">
              <div className="screenshots-grid">
                <div className="card animate-fade-in-up">
                  <div className="aspect-video bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--card-bg)] rounded-xl mb-10 flex items-center justify-center border border-[var(--border)] overflow-hidden">
                    <div className="text-center">
                      <CubeIcon className="w-16 h-16 text-[var(--foreground-subtle)] mx-auto mb-4" />
                      <p className="text-[var(--foreground-subtle)] text-sm">Screenshot Coming Soon</p>
                    </div>
                  </div>
                  <h3 className="text-subheading mb-6">Package Browser</h3>
                  <p className="text-body leading-relaxed">
                    Browse and search through thousands of Homebrew packages with an intuitive interface that makes discovery effortless.
                  </p>
                </div>
                
                <div className="card animate-fade-in-up-delay-1">
                  <div className="aspect-video bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--card-bg)] rounded-xl mb-10 flex items-center justify-center border border-[var(--border)] overflow-hidden">
                    <div className="text-center">
                      <CommandLineIcon className="w-16 h-16 text-[var(--foreground-subtle)] mx-auto mb-4" />
                      <p className="text-[var(--foreground-subtle)] text-sm">Screenshot Coming Soon</p>
                    </div>
                  </div>
                  <h3 className="text-subheading mb-6">Package Management</h3>
                  <p className="text-body leading-relaxed">
                    Install, update, and remove packages with confidence. Real-time feedback and progress tracking keep you informed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="relative bg-gradient-to-br from-[var(--surface)] via-[var(--surface-elevated)] to-[var(--surface-alt)] border-t border-[var(--border)] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--accent)] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[var(--primary)] to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="WailBrew Logo"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight gradient-text">WailBrew</h3>
                    <p className="text-[var(--foreground-subtle)] text-sm">The beautiful Homebrew GUI</p>
                  </div>
                </div>
                <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-8 max-w-md">
                  Experience the power of Homebrew through an intuitive, modern interface. 
                  Package management has never been this beautiful.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://github.com/wickenico/WailBrew" 
                    className="footer-social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
                    <GitHubIcon className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
        </a>
        <a
                    href="https://github.com/wickenico/WailBrew/releases" 
                    className="footer-social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
                    <DownloadIcon className="w-5 h-5" />
                    <span className="sr-only">Releases</span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-[var(--foreground)]">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#features" className="footer-link">Features</a>
                  </li>
                  <li>
                    <a href="#download" className="footer-link">Download</a>
                  </li>
                  <li>
                    <a href="#screenshots" className="footer-link">Screenshots</a>
                  </li>
                  <li>
                    <a href="https://github.com/wickenico/WailBrew/releases" className="footer-link" target="_blank" rel="noopener noreferrer">
                      Releases
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-[var(--foreground)]">Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="https://github.com/wickenico/WailBrew" className="footer-link" target="_blank" rel="noopener noreferrer">
                      Source Code
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/wickenico/WailBrew/issues" className="footer-link" target="_blank" rel="noopener noreferrer">
                      Report Issues
                    </a>
                  </li>
                  <li>
                    <a href="https://brew.sh" className="footer-link" target="_blank" rel="noopener noreferrer">
                      Homebrew
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/wickenico/WailBrew/blob/main/LICENSE" className="footer-link" target="_blank" rel="noopener noreferrer">
                      MIT License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[var(--border)] py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-8">
                <p className="text-[var(--foreground-subtle)] text-sm">
                  WailBrew © Nico Wickersheim 2025. Open source software under MIT License.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--foreground-subtle)]">
                <span>Built with</span>
                <span className="text-red-500">♥</span>
                <span>in Freiburg</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Back to top"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
