export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 border-t border-gray-900 bg-black text-center selection:bg-accent selection:text-black">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-8">Initiate Contact</h2>
        
        <h3 className="text-5xl md:text-8xl lg:text-[7rem] font-serif tracking-tighter leading-none text-white mb-12">
          LET'S BUILD
          <br />
          <span className="italic text-gray-600">SYSTEMS.</span>
        </h3>
        
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-16">
          <a 
            href="mailto:aadimate2004@gmail.com" 
            className="w-full sm:w-auto px-12 py-4 rounded-full text-xs font-mono uppercase tracking-widest text-black bg-white hover:bg-accent transition-colors text-center"
          >
            Email Me
          </a>
          
          <a 
            href="https://wa.me/917898575626?text=Hi%20Prabhav" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-4 rounded-full text-xs font-mono uppercase tracking-widest text-black bg-[#25D366] hover:bg-white transition-colors text-center"
          >
            WhatsApp
          </a>

          <a 
            href="https://www.linkedin.com/in/prabhavjain2004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-4 rounded-full text-xs font-mono uppercase tracking-widest text-white border border-gray-800 hover:border-white transition-colors text-center"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-12">
          <p className="text-gray-600 font-mono text-sm uppercase tracking-widest">
            Direct Line <span className="mx-2 text-gray-800">/</span> +91 78985 75626
          </p>
        </div>

      </div>
    </section>
  );
}
