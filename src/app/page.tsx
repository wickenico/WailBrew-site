import { GitHubIcon, DownloadIcon, CommandLineIcon, SparklesIcon, ShieldCheckIcon, CubeIcon } from '@/components/icons';
import Image from 'next/image';

export default function Home() {
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
                <span className="text-xs text-[var(--foreground-subtle)] ml-2 hidden sm:inline">Homebrew GUI</span>
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

      {/* Modern Download Section */}
      <section id="download" className="section-padding bg-[var(--surface-variant)]">
        <div className="w-full flex justify-center">
          <div className="max-w-6xl mx-auto px-8 lg:px-12 w-full">
            <div className="text-center mb-24">
              <h2 className="text-heading mb-10 animate-fade-in-up section-text">Download WailBrew</h2>
              <p className="text-body-large animate-fade-in-up-delay-1 leading-relaxed section-text">
                Get started today and discover the wonderful world of Homebrew through a beautiful interface.
              </p>
            </div>
            
            <div className="center-content">
              <div className="download-grid">
                <div className="card animate-fade-in-up">
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-10 glow-primary">
                      <DownloadIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-subheading mb-8">Direct Download</h3>
                    <p className="text-body mb-12 leading-relaxed">
                      Download the latest version directly from GitHub releases. Get the most up-to-date features and improvements.
                    </p>
                    <a href="https://github.com/wickenico/WailBrew/releases/latest" className="btn-primary inline-flex items-center gap-2 w-full justify-center px-6 py-4">
                      <DownloadIcon className="w-5 h-5" />
                      Download Latest Release
                    </a>
                  </div>
                </div>
                
                <div className="card animate-fade-in-up-delay-1">
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent)] to-[var(--success)] rounded-2xl flex items-center justify-center mx-auto mb-10 glow-accent">
                      <CommandLineIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-subheading mb-8">Install via Homebrew</h3>
                    <p className="text-body mb-12 leading-relaxed">
                      How recursive is that? Install WailBrew using Homebrew itself! Perfect for command-line enthusiasts.
                    </p>
                    <div className="bg-[var(--surface-elevated)] rounded-xl p-8 border border-[var(--border)] font-mono text-sm mb-10">
                      <code className="text-[var(--accent)]">brew install --cask wailbrew</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-24 max-w-4xl mx-auto">
              <div className="card bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20 animate-fade-in-up-delay-2">
                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-400 text-lg">⚠️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-amber-400">Installation Notice</h4>
                    <p className="text-body leading-relaxed">
                      WailBrew doesn&apos;t install Homebrew for you. To install Homebrew, please visit their{' '}
                      <a href="https://brew.sh" className="text-[var(--primary)] hover:text-[var(--primary-light)] underline transition-colors">
                        official website
                      </a>
                      {' '}first.
                    </p>
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
      <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight">WailBrew</span>
                <p className="text-[var(--foreground-subtle)] text-sm">Homebrew GUI for macOS</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/wickenico/WailBrew" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
                <GitHubIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--border)] text-center">
            <p className="text-[var(--foreground-subtle)]">
              © 2025 WailBrew. Open source software under MIT License.
            </p>
          </div>
        </div>
      </footer>

      {/* Add scroll detection script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-menu-item[data-section]');
            
            function updateActiveSection() {
              let current = '';
              sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                  current = section.getAttribute('id');
                }
              });
              
              navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === current) {
                  link.classList.add('active');
                }
              });
            }
            
            window.addEventListener('scroll', updateActiveSection);
            updateActiveSection();
          });
        `
      }} />
    </div>
  );
}
