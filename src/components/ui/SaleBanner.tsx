// components/SaleBanner.tsx
import { useState } from 'react';
import { X } from 'lucide-react'; // You can install lucide-react for icons

export default function SaleBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-yellow-300 text-black px-4 py-2 flex items-center justify-between text-sm font-medium">
      <span>🔥 Limited Time Offer! 20% off on your first purchase! 🔥</span>
      <button onClick={() => setVisible(false)} className="ml-4 hover:text-red-600">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
