import React from "react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  Zap,
  Target,
  Globe,
  Laptop,
  Video,
  MessageSquare,
  Download,
  Shield,
  Sparkles,
  ArrowRight,
  HeadphonesIcon,
  Calendar,
  TrendingUp,
} from "lucide-react";
import {
  AnimatedSection,
  StaggeredList,
  MagneticButton,
  FloatingElement,
  CountUp,
} from "@/components/AnimatedElements";

export default function Services() {
  const { t } = useI18n();

  const services = [
    {
      id: 1,
      title: "Professional Development Courses",
      description:
        "Advance your career with industry-leading professional courses designed by experts.",
      icon: Laptop,
      features: [
        "Expert-led instruction",
        "Industry certifications",
        "Career advancement",
        "Real-world projects",
      ],
      duration: "3-6 months",
      level: "Intermediate to Advanced",
      price: "Starting from $299",
      popular: true,
    },
    {
      id: 2,
      title: "Language Learning Programs",
      description:
        "Master new languages with our immersive and interactive learning approach.",
      icon: Globe,
      features: [
        "Native speaker instructors",
        "Interactive exercises",
        "Cultural immersion",
        "Flexible scheduling",
      ],
      duration: "6-12 months",
      level: "Beginner to Advanced",
      price: "Starting from $199",
      popular: false,
    },
    {
      id: 3,
      title: "Digital Skills Training",
      description:
        "Stay ahead in the digital age with cutting-edge technology and digital marketing courses.",
      icon: Zap,
      features: [
        "Latest technologies",
        "Hands-on practice",
        "Industry tools",
        "Portfolio development",
      ],
      duration: "2-4 months",
      level: "Beginner to Intermediate",
      price: "Starting from $249",
      popular: false,
    },
    {
      id: 4,
      title: "Personal Development",
      description:
        "Unlock your potential with courses focused on leadership, communication, and life skills.",
      icon: Target,
      features: [
        "Leadership skills",
        "Communication mastery",
        "Goal setting",
        "Life coaching",
      ],
      duration: "1-3 months",
      level: "All levels",
      price: "Starting from $149",
      popular: false,
    },
  ];

  const features = [
    {
      icon: Video,
      title: "HD Video Content",
      description:
        "High-quality video lessons with crystal clear audio and visual content.",
    },
    {
      icon: Download,
      title: "Downloadable Resources",
      description:
        "Access course materials, worksheets, and resources for offline learning.",
    },
    {
      icon: MessageSquare,
      title: "Live Q&A Sessions",
      description:
        "Interactive sessions with instructors and fellow students for real-time support.",
    },
    {
      icon: Shield,
      title: "Lifetime Access",
      description:
        "Once enrolled, enjoy lifetime access to course content and updates.",
    },
    {
      icon: Award,
      title: "Certificates",
      description:
        "Earn industry-recognized certificates upon successful course completion.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description:
        "Round-the-clock technical and academic support whenever you need it.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      description: "Perfect for individuals starting their learning journey",
      features: [
        "Access to 50+ courses",
        "Basic course materials",
        "Community forum access",
        "Email support",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for professionals looking to advance their careers",
      features: [
        "Access to 200+ courses",
        "Premium course materials",
        "Live Q&A sessions",
        "Priority support",
        "Downloadable resources",
        "Course certificates",
        "Career guidance",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Comprehensive solution for teams and organizations",
      features: [
        "Unlimited course access",
        "Custom learning paths",
        "Team management tools",
        "Advanced analytics",
        "Dedicated account manager",
        "White-label options",
        "API integration",
        "Custom content creation",
      ],
      popular: false,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full" />
          <FloatingElement className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection
            animation="fade-up"
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <BookOpen className="mr-2 h-4 w-4" />
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Transform Your Skills</span>
              <br />
              With Expert-Led Learning
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Discover our comprehensive range of educational services designed
              to help you achieve your learning goals. From professional
              development to personal growth, we have the perfect course for
              you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/courses">
                <Button size="lg" className="px-8 py-3 text-base font-semibold">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Courses
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-base font-semibold"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Consultation
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <Star className="mr-2 h-4 w-4" />
              Featured Services
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of educational services tailored to meet
              your specific learning needs and career goals.
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            itemClassName=""
            delay={150}
          >
            {services.map((service) => (
              <Card
                key={service.id}
                className={`relative overflow-hidden bg-card/80 backdrop-blur-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.popular
                    ? "border-primary/50 ring-2 ring-primary/20"
                    : "border-border/50"
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="mr-1 h-3 w-3" />
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-background/80 p-3 rounded-lg">
                      <Clock className="h-4 w-4 text-primary mb-1" />
                      <p className="font-medium">Duration</p>
                      <p className="text-muted-foreground">
                        {service.duration}
                      </p>
                    </div>
                    <div className="bg-background/80 p-3 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-primary mb-1" />
                      <p className="font-medium">Level</p>
                      <p className="text-muted-foreground">{service.level}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="text-lg font-bold text-primary">
                        {service.price}
                      </p>
                    </div>
                    <Button className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <Zap className="mr-2 h-4 w-4" />
              Platform Features
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our learning platform is packed with features designed to enhance
              your educational experience and ensure your success.
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            itemClassName=""
            delay={100}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <Target className="mr-2 h-4 w-4" />
              Pricing Plans
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Select from our flexible pricing options designed to fit your
              learning needs and budget.
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            itemClassName=""
            delay={150}
          >
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  plan.popular
                    ? "border-primary/50 ring-2 ring-primary/20 scale-105"
                    : "border-border/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader
                  className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}
                >
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary hover:bg-secondary/90"
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            itemClassName="text-center"
            delay={150}
          >
            {[
              { value: 50000, suffix: "+", label: "Students Enrolled" },
              { value: 500, suffix: "+", label: "Courses Available" },
              { value: 98, suffix: "%", label: "Success Rate" },
              { value: 24, suffix: "/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in">
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers and
              lives through our comprehensive learning platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/courses">
                <Button
                  size="lg"
                  className="px-8 py-3 text-base font-semibold group"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-base font-semibold"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Sales
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
