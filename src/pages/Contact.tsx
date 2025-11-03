import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Loader2, Phone, MapPin, MessageSquare } from "lucide-react";
import doomSilhouette from "@/assets/doom-silhouette.png";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_3yaqhle",
        "template_btryye2",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Rolb47AKzfWOjFTC5"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I’ll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message. Try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f1a] via-[#0f2e28] to-[#081812]" />
        <div
          className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat bg-contain bg-right opacity-40"
          style={{
            backgroundImage: `url(${doomSilhouette})`,
            maskImage: "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* LEFT SIDE — Form */}
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg border-2 border-accent flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <h1 className="text-5xl font-bold text-foreground">
                    Contact <span className="text-accent">Me</span>
                  </h1>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#1a1a1a] border-primary/50 text-foreground placeholder:text-muted-foreground focus:border-accent h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#1a1a1a] border-primary/50 text-foreground placeholder:text-muted-foreground focus:border-accent h-12"
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#1a1a1a] border-primary/50 text-foreground placeholder:text-muted-foreground focus:border-accent min-h-[150px] resize-none"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-accent hover:bg-accent/90 text-primary-foreground font-semibold shadow-lg hover:shadow-[0_0_30px_hsl(120_100%_50%/0.4)] transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {loading ? (
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-rotate-12 transition-all duration-300" />
                      )}
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-magic-shimmer bg-[length:200%_100%]" />
                  </Button>
                </form>
              </div>

              {/* ✅ RIGHT SIDE — Contact Info Boxes */}
              <div className="space-y-6 animate-fade-in">
                {/* Email */}
                <a
                  href="mailto:siddardhagaming@gmail.com"
                  className="flex items-center gap-4 p-5 bg-[#1a1a1a] border border-accent/50 rounded-lg hover:border-accent hover:shadow-[0_0_15px_hsl(120_100%_50%/0.4)] transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-muted-foreground">siddardhagaming@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919490566729"
                  className="flex items-center gap-4 p-5 bg-[#1a1a1a] border border-accent/50 rounded-lg hover:border-accent hover:shadow-[0_0_15px_hsl(120_100%_50%/0.4)] transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+91 9490566729</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-5 bg-[#1a1a1a] border border-accent/50 rounded-lg hover:border-accent hover:shadow-[0_0_15px_hsl(120_100%_50%/0.4)] transition-all duration-300">
                  <MapPin className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-muted-foreground">Akividu, Andhra Pradesh, India</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-4 p-5 bg-[#1a1a1a] border border-accent/50 rounded-lg hover:border-accent hover:shadow-[0_0_15px_hsl(120_100%_50%/0.4)] transition-all duration-300">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="text-lg font-semibold">Response Time</h4>
                    <p className="text-muted-foreground">Usually replies within 24 hours</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6 p-5 bg-[#1a1a1a] border border-accent/50 rounded-lg hover:border-accent hover:shadow-[0_0_15px_hsl(120_100%_50%/0.4)] transition-all duration-300">
                  <a
                    href="https://github.com/siddardha146"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary hover:scale-110 transition-transform"
                  >
                    <Github className="w-7 h-7" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sajjala-siddardha-84685928b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
