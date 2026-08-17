'use client';

import { useState } from 'react';
import { Share2, Check, MessageCircle, Linkedin, Twitter, Link2 } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareWhatsapp = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
  const shareLinkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  const copyToClipboard = async () => {
    try {
      if (typeof window !== 'undefined') {
        await navigator.clipboard.writeText(url || window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 py-6 border-y border-gray-100 my-8">
      <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider mr-2">
        <Share2 className="w-4 h-4 text-accent-dark" />
        <span>Compartir:</span>
      </div>

      <a
        href={shareWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all text-xs font-semibold"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        WhatsApp
      </a>

      <a
        href={shareLinkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all text-xs font-semibold"
      >
        <Linkedin className="w-3.5 h-3.5" />
        LinkedIn
      </a>

      <a
        href={shareTwitter}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-all text-xs font-semibold"
      >
        <Twitter className="w-3.5 h-3.5" />
        X (Twitter)
      </a>

      <button
        onClick={copyToClipboard}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-accent hover:text-brand-dark transition-all text-xs font-semibold ml-auto"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-green-600" />
            <span>¡Enlace copiado!</span>
          </>
        ) : (
          <>
            <Link2 className="w-3.5 h-3.5" />
            <span>Copiar enlace</span>
          </>
        )}
      </button>
    </div>
  );
}
