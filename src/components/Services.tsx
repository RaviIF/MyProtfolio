import { Card } from "@/components/ui/card";
import { Gamepad2, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Custom 2D/3D games for mobile, PC, and XR platforms using Unity. Specializing in interactive gameplay, immersive experiences, and cross-platform optimization.",
      features: [
        "Mobile game development (Android & iOS)",
        "PC game development (Windows & Mac)",
        "XR/AR/MR game experiences",
        "Gesture and motion-controlled gameplay"
      ]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Interactive simulations, visualization tools, and system design for multiple industries, especially medical and training sectors.",
      features: [
        "Medical visualization systems",
        "Training simulations",
        "Interactive educational tools",
        "Custom software solutions"
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
