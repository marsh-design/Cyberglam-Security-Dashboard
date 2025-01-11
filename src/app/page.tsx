import { Heart, Sparkles, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-kawaii-pink-light via-kawaii-purple-light to-kawaii-blue-light p-6">
      {/* Header Section */}
      <header className="relative mb-8 border-b border-kawaii-pink/20 pb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Heart className="h-8 w-8 text-kawaii-pink animate-pulse" />
            <Star className="h-4 w-4 text-kawaii-yellow absolute -top-1 -right-1 animate-spin" />
          </div>
          <div>
            <h1 className="text-4xl font-bold y2k-gradient-text">
              CyberGlam Security ✨
            </h1>
            <p className="text-sm text-kawaii-purple mt-1 flex items-center gap-2">
              <Sparkles className="h-3 w-3" />
              Real-time threat monitoring with style
            </p>
          </div>
        </div>
      </header>

      {/* Metrics Grid - Placeholder for now */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {['Total Threats', 'Active Alerts', 'System Status', 'Processing Time'].map((metric) => (
          <div key={metric} className="y2k-card p-4">
            <h3 className="text-kawaii-purple font-medium">{metric}</h3>
            <p className="text-2xl font-bold text-kawaii-pink mt-2">0</p>
          </div>
        ))}
      </div>

      {/* Main Dashboard Area - Coming soon */}
      <div className="y2k-window p-6">
        <p className="text-center text-kawaii-purple">
          🚧 Dashboard components coming soon! 🚧
        </p>
      </div>
    </div>
  );
}