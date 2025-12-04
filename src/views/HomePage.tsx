import { useState } from 'react';
import TipForm from '../components/TipForm';

function HomePage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    // Prototype: just toggle the connection state
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full Screen Background Image */}
      <div 
        className="fixed inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop)',
        }}
      >
        {/* Subtle overlay for contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 min-h-screen flex flex-col p-6 md:p-12">
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-start justify-center">
          
          {/* Floating Tip Form Panel */}
          <div className="w-full max-w-[480px] flex flex-col gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-dm-sans font-semibold text-white mb-3 tracking-tight">
                Just A Tip.
              </h1>
              <p className="text-base md:text-lg text-white/80 font-roboto-mono">
                The simplest way to tip on Arweave.
              </p>
            </div>
            
            <TipForm 
              isWalletConnected={isWalletConnected}
              onConnectWallet={handleConnectWallet}
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default HomePage;
