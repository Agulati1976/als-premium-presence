import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useEnquiry } from "@/contexts/EnquiryContext";

export function EnquiryModal() {
  const { isOpen, closeEnquiry } = useEnquiry();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      closeEnquiry();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={closeEnquiry}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-strong p-6 sm:p-10 noise"
          >
            <button
              onClick={closeEnquiry}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close enquiry form"
            >
              <X className="size-5" />
            </button>

            <div className="mb-6">
              <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Enquiry Form</div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Request a <span className="text-gradient">Consultation</span>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your project. Our team responds within 24 hours.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" type="text" required />
                <Field label="Company Name" name="company" type="text" />
                <Field label="Phone Number" name="phone" type="tel" required />
                <Field label="Email Address" name="email" type="email" required />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">
                  Service Required
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  <option className="bg-background">Real Estate Services</option>
                  <option className="bg-background">BPO / Call Centre</option>
                  <option className="bg-background">Software Development</option>
                  <option className="bg-background">Digital Marketing</option>
                  <option className="bg-background">IT Services</option>
                  <option className="bg-background">Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-bold text-primary-foreground hover:shadow-[0_20px_60px_-10px_rgba(199,240,0,0.6)] transition-all hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                {sent ? (
                  <>
                    <CheckCircle2 className="size-5 relative" />
                    <span className="relative">Thank you — we&apos;ll be in touch</span>
                  </>
                ) : (
                  <>
                    <span className="relative">Send Enquiry</span>
                    <Send className="size-4 relative group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div className="relative">
      <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}
