import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 border-t text-lg text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 grid-cols-1 md:grid-cols-4">
        {/* Customer Service */}
        <div>
          <h4 className="font-semibold mb-2">Customer Service</h4>
          <p>Email: <a href="mailto:connect@dosanj.co.in" className="text-blue-600">connect@dosanj.co.in</a></p>
          <p>Phone: <a href="tel:+919520319444" className="text-blue-600">9520319444</a></p>
          <p className="mt-2 text-gray-500">To place a Bulk Order, contact the number above.</p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><Link href="/why-dosanj">Why Dosanj?</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/store">Store</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="font-semibold mb-2">Help</h4>
          <ul className="space-y-1">
            <li><Link href="/returns">Return & Exchange</Link></li>
            <li><Link href="/shipping">Shipping Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-2">Join the list</h4>
          <p className="mb-4 text-gray-600">
            Be the first to receive discounts and updates on our latest collections.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input placeholder="Enter your email" type="email" className="w-full" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-6 text-xs text-gray-500">
        <div className="flex justify-center gap-4 mb-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <p>© 2025 Dosanj Design</p>
        <p>Powered by Shopify</p>
      </div>
    </footer>
  );
}
