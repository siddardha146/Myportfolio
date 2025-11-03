import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Loader2, Phone, MapPin } from "lucide-react";
import venomSilhouette from "@/assets/venom-silhouette.jpg";
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
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Venom Video Background */}
        <video
          src={venomVideo}
          muted
          autoPlay
          loop
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        />

        {/* Red-Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#15000d] to-[#080808] opacity-90 z-0" />

        {/* Venom Silhouette */}
        <div
          className="absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-contain bg-right opacity-10 z-0"
          style={{
            backgroundImage: `url(${venomSilhouette})`,
            maskImage: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Form */}
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg border-2 border-red-600 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <h1 className="text-5xl font-bold text-white">
                    Contact <span className="text-red-500">Me</span>
                  </h1>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/70 border-red-500/30 text-white placeholder:text-gray-500 focus:border-red-500 h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black/70 border-red-500/30 text-white placeholder:text-gray-500 focus:border-red-500 h-12"
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black/70 border-red-500/30 text-white placeholder:text-gray-500 focus:border-red-500 min-h-[150px] resize-none"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg hover:shadow-red-700/50 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {loading ? (
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
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
                    className="text-red-500 hover:text-white hover:scale-110 transition-all"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sajjala-siddardha-84685928b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-white hover:scale-110 transition-all"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>

              {/* Right Side - Contact Info */}
              <div className="space-y-6 bg-[#0a0a0a]/60 p-6 rounded-lg border border-red-600/30 backdrop-blur-lg shadow-lg">
                <div className="flex items-center gap-4 text-white">
                  <Mail className="w-6 h-6 text-red-500" />
                  <p>siddardhagaming@gmail.com</p>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Phone className="w-6 h-6 text-red-500" />
                  <p>9490566729</p>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <p>Akividu, Andhra Pradesh, India</p>
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
