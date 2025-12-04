import { useState } from 'react';

interface TipFormProps {
  isWalletConnected: boolean;
  onConnectWallet: () => void;
}

function TipForm({ isWalletConnected, onConnectWallet }: TipFormProps) {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isWalletConnected || !amount || !address) return;

    setIsSubmitting(true);
    // Simulate tip sending (prototype only)
    setTimeout(() => {
      alert(`Tip of ${amount} AR sent to ${address.substring(0, 10)}...`);
      setAmount('');
      setAddress('');
      setIsSubmitting(false);
    }, 1000);
  };

  const cardClasses =
    'bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl p-6 md:p-7 w-full transition-all duration-200';
  const inputClasses =
    'w-full px-4 py-3.5 bg-black/25 border border-white/15 rounded-xl focus:ring-1 focus:ring-white/40 focus:border-transparent outline-none transition-all font-roboto-mono text-white placeholder-white/35 text-sm';
  const labelClasses =
    'block text-xs font-medium text-white/80 mb-2 font-roboto-mono tracking-[0.12em] uppercase';
  const buttonPrimaryClasses =
    'w-full bg-white text-black hover:bg-white/90 font-medium py-3.5 px-6 rounded-xl transition-colors duration-150 font-dm-sans text-base';
  
  if (!isWalletConnected) {
    return (
      <div className={cardClasses}>
        <h2 className="text-2xl font-dm-sans font-semibold mb-3 text-white">
          Connect Wallet
        </h2>
        <p className="text-white/70 mb-6 text-sm font-roboto-mono leading-relaxed">
          Connect your Arweave wallet to start sending tips securely and instantly.
        </p>
        <button
          onClick={onConnectWallet}
          className={buttonPrimaryClasses}
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className={cardClasses}>
      <h2 className="text-2xl font-dm-sans font-semibold mb-6 text-white">
        Send a Tip
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="amount" className={labelClasses}>
            Amount (AR)
          </label>
          <div className="relative">
            <input
              id="amount"
              type="number"
              step="0.000001"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.0"
              required
              className={inputClasses}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 font-roboto-mono text-sm">AR</span>
          </div>
        </div>

        <div>
          <label htmlFor="address" className={labelClasses}>
            Arweave Address
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Paste address here"
            required
            className={inputClasses}
          />
        </div>

        <button
          type="submit"
          disabled={!amount || !address || isSubmitting}
          className={`${buttonPrimaryClasses} disabled:opacity-40 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? 'Sending…' : 'Send Tip'}
        </button>
      </form>

      <div className="mt-5 flex justify-between items-center text-[11px] text-white/55 font-roboto-mono">
        <span>{isWalletConnected ? 'Wallet connected' : 'Not connected'}</span>
        <button
          type="button"
          onClick={() => onConnectWallet()}
          className="hover:text-white transition-colors"
        >
          {isWalletConnected ? 'Disconnect' : 'Connect'}
        </button>
      </div>
    </div>
  );
}

export default TipForm;
