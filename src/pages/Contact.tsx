import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Loader2, Phone, MapPin } from "lucide-react";
import venomSilhouette from "@/assets/venom-silhouette.png";
import venomVideo from "@/assets/venom-marvel-rivals.1920x1080.mp4";
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
      <div className="relative min-h-screen w-full overflow-hidden text-white">
        {/* Venom Video Background */}
        <video
          src={venomVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/80 z-0" />

        {/* Venom Silhouette */}
        <div
          className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat bg-contain bg-right opacity-30 z-0"
          style={{
            backgroundImage: `url(${venomSilhouette})`,
            maskImage: "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form Section */}
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white/10 rounded-lg border-2 border-white flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-5xl font-extrabold tracking-wider">
                    Contact <span className="text-white/60">Me</span>
                  </h1>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/60 border-white/20 text-white placeholder:text-gray-400 focus:border-white h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black/60 border-white/20 text-white placeholder:text-gray-400 focus:border-white h-12"
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black/60 border-white/20 text-white placeholder:text-gray-400 min-h-[150px] resize-none focus:border-white"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/30 shadow-md transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {loading ? (
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-all duration-300" />
                      )}
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                  </Button>
                </form>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mt-6">
                  <a
                    href="https://github.com/siddardha146"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:scale-110 transition-transform"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sajjala-siddardha-84685928b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-white/80" />
                  <p className="text-gray-200">siddardhagaming@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-white/80" />
                  <p className="text-gray-200">9490566729</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-white/80" />
                  <p className="text-gray-200">Akividu, Andhra Pradesh, India</p>
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
