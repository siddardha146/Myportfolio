import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import doomSilhouette from "@/assets/doom-silhouette.png";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
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
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      await emailjs.send(
        "service_3yaqhle",        // ✅ Your Service ID
        "template_btryye2",       // ✅ Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Rolb47AKzfWOjFTC5"       // ✅ Your Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message. Try again later.",
        variant: "destructive",
      });
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
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                    className="w-full bg-accent hover:bg-accent/90 text-primary-foreground font-semibold shadow-lg hover:shadow-[0_0_30px_hsl(120_100%_50%/0.4)] transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-rotate-12 transition-all duration-300" />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-magic-shimmer bg-[length:200%_100%]" />
                  </Button>
                </form>
              </div>
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
