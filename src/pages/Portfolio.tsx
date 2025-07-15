import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Users,
  Award,
  ExternalLink,
  Github,
  Globe,
  Calendar,
  CheckCircle,
  Star,
  Zap,
  Target,
  Eye,
  TrendingUp,
  Code,
  Palette,
  Smartphone,
  Database,
  Brain,
  Sparkles,
  ArrowRight,
  Play,
  Download,
  Heart,
} from "lucide-react";
import {
  AnimatedSection,
  StaggeredList,
  MagneticButton,
  FloatingElement,
  CountUp,
} from "@/components/AnimatedElements";

export default function Portfolio() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects", icon: Briefcase },
    { id: "web", label: "Web Development", icon: Code },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "design", label: "UI/UX Design", icon: Palette },
    { id: "data", label: "Data Science", icon: Database },
    { id: "ai", label: "AI & ML", icon: Brain },
  ];

  const projects = [
    {
      id: 1,
      title: "Smart Learning Management System",
      description:
        "A comprehensive LMS platform built with React and Node.js, serving over 10,000 students worldwide.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      liveUrl: "https://demo.smartlearning.academy",
      githubUrl: "https://github.com/smartlearning/lms",
      featured: true,
      metrics: {
        users: "10,000+",
        completion: "95%",
        rating: "4.9/5",
      },
    },
    {
      id: 2,
      title: "Mobile Learning Companion",
      description:
        "Cross-platform mobile app for offline learning with AI-powered recommendations.",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["React Native", "TypeScript", "TensorFlow", "Firebase"],
      liveUrl: "https://apps.apple.com/app/learning-companion",
      githubUrl: "https://github.com/smartlearning/mobile-app",
      featured: true,
      metrics: {
        downloads: "50,000+",
        rating: "4.8/5",
        countries: "25+",
      },
    },
    {
      id: 3,
      title: "Course Creation Studio",
      description:
        "Intuitive design system and interface for instructors to create engaging online courses.",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      technologies: ["Figma", "Adobe XD", "Principle", "Framer"],
      liveUrl: "https://studio.smartlearning.academy",
      featured: false,
      metrics: {
        instructors: "1,000+",
        courses: "5,000+",
        satisfaction: "98%",
      },
    },
    {
      id: 4,
      title: "Student Performance Analytics",
      description:
        "Advanced analytics dashboard providing insights into student progress and learning patterns.",
      category: "data",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Pandas", "D3.js", "PostgreSQL"],
      liveUrl: "https://analytics.smartlearning.academy",
      githubUrl: "https://github.com/smartlearning/analytics",
      featured: false,
      metrics: {
        dataPoints: "1M+",
        accuracy: "94%",
        insights: "500+",
      },
    },
    {
      id: 5,
      title: "AI-Powered Content Generator",
      description:
        "Machine learning system that automatically generates personalized learning content and assessments.",
      category: "ai",
      image:
        "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "OpenAI", "Docker"],
      githubUrl: "https://github.com/smartlearning/ai-content",
      featured: true,
      metrics: {
        content: "10,000+",
        accuracy: "96%",
        languages: "12",
      },
    },
    {
      id: 6,
      title: "Virtual Classroom Platform",
      description:
        "Real-time video conferencing and collaboration platform for online education.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
      technologies: ["WebRTC", "Socket.io", "React", "Express"],
      liveUrl: "https://classroom.smartlearning.academy",
      githubUrl: "https://github.com/smartlearning/virtual-classroom",
      featured: false,
      metrics: {
        sessions: "25,000+",
        uptime: "99.9%",
        users: "5,000+",
      },
    },
  ];

  const achievements = [
    {
      title: "Best EdTech Platform 2023",
      organization: "Global Education Awards",
      year: "2023",
      icon: Award,
    },
    {
      title: "Innovation in Learning Award",
      organization: "UNESCO",
      year: "2022",
      icon: Sparkles,
    },
    {
      title: "Top 10 Startups in Education",
      organization: "TechCrunch",
      year: "2022",
      icon: TrendingUp,
    },
    {
      title: "Excellence in User Experience",
      organization: "UX Design Awards",
      year: "2021",
      icon: Eye,
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "University Professor",
      company: "Stanford University",
      content:
        "The portfolio showcases exceptional technical expertise and innovative solutions that have transformed online education.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b788?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "EduTech Solutions",
      content:
        "Outstanding work that demonstrates deep understanding of educational technology and user experience design.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      role: "Product Manager",
      company: "Learning Innovations Inc.",
      content:
        "The quality and innovation shown in these projects is truly impressive. A game-changer in the education space.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
              <Briefcase className="mr-2 h-4 w-4" />
              Our Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Innovative Solutions</span>
              <br />
              That Shape the Future
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Explore our collection of cutting-edge projects and educational
              technologies that have transformed learning experiences for
              thousands of students and educators worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="px-8 py-3 text-base font-semibold group"
              >
                <Play className="mr-2 h-5 w-5" />
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-base font-semibold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Get Portfolio PDF
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            itemClassName="text-center"
            delay={150}
          >
            {[
              { value: 50, suffix: "+", label: "Projects Completed" },
              { value: 100000, suffix: "+", label: "Users Impacted" },
              { value: 25, suffix: "+", label: "Awards Won" },
              { value: 98, suffix: "%", label: "Client Satisfaction" },
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

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <Star className="mr-2 h-4 w-4" />
              Featured Work
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              Our Amazing Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the innovative solutions we've built to revolutionize
              education and learning experiences.
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            itemClassName=""
            delay={100}
          >
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className={`relative overflow-hidden bg-card/80 backdrop-blur-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${
                  project.featured
                    ? "border-primary/50 ring-2 ring-primary/20"
                    : "border-border/50"
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="bg-white/90 text-black hover:bg-white"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/90 text-black hover:bg-white border-white/20"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {Object.entries(project.metrics).map(
                      ([key, value], index) => (
                        <div
                          key={index}
                          className="bg-background/60 p-2 rounded text-center"
                        >
                          <p className="font-semibold text-primary">{value}</p>
                          <p className="text-muted-foreground capitalize">
                            {key}
                          </p>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1">
                        <Globe className="mr-2 h-3 w-3" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <Award className="mr-2 h-4 w-4" />
              Recognition
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              Awards & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized by leading
              organizations in the education and technology sectors.
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            itemClassName=""
            delay={150}
          >
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground mb-1">
                      {achievement.organization}
                    </p>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <Heart className="mr-2 h-4 w-4" />
              Client Testimonials
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hear from our satisfied clients about their experience working
              with us and the impact of our solutions.
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            itemClassName=""
            delay={150}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <FloatingElement className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full" />
        <FloatingElement className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full" />

        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection animation="scale-in">
            <h2 className="text-section-title font-bold mb-5">
              Ready to Work Together?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's collaborate to create innovative solutions that will
              transform your educational initiatives and impact learners
              worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start a Project
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-base font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Portfolio
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
