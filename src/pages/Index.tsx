import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Gamepad2, Star, Trophy, Users, Zap, Target, ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Apprentissage Gamifié",
      description: "Développez vos soft skills à travers des jeux et défis interactifs"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Système de Progression",
      description: "Gagnez des étoiles et débloquez de nouveaux niveaux progressivement"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Badges & Certificats",
      description: "Obtenez des récompenses et partagez vos accomplissements"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Compétences Pratiques",
      description: "Travail d'équipe, communication, gestion du temps et plus encore"
    }
  ];

  const stats = [
    { number: "8", label: "Niveaux de compétences" },
    { number: "100+", label: "Exercices interactifs" },
    { number: "1", label: "Mission finale" },
    { number: "∞", label: "Possibilités de carrière" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20" />
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground border-0">
              <Zap className="h-4 w-4 mr-2" />
              Nouvelle génération d'apprentissage
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              PowerSkills
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Développez vos <span className="text-primary font-semibold">soft skills</span> à travers 
              un parcours gamifié innovant. Préparez-vous pour votre premier emploi avec des compétences 
              qui font la différence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/signup')}
              >
                <Play className="h-5 w-5 mr-2" />
                Commencer l'aventure
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/login')}
              >
                J'ai déjà un compte
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Pourquoi choisir <span className="text-primary">PowerSkills</span> ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche révolutionnaire pour développer les compétences essentielles 
              du monde professionnel moderne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-card to-accent/5 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-primary/10 to-primary-glow/10 text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Mission : <span className="text-primary">Premier Emploi</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Parcourez 8 niveaux de compétences essentielles, de la communication efficace 
              à la maîtrise émotionnelle. Chaque niveau vous prépare pour une mission finale : 
              réussir votre entretien d'embauche.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary-glow/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Objectif Pédagogique</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Développer des compétences transversales</li>
                    <li>• Renforcer l'autonomie et la pensée critique</li>
                    <li>• Gérer des situations professionnelles concrètes</li>
                    <li>• Améliorer l'intelligence émotionnelle</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary/5 to-muted/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Système de Récompenses</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Notation par étoiles (0 à 5)</li>
                    <li>• Déblocage progressif des niveaux</li>
                    <li>• Badges à la fin de chaque compétence</li>
                    <li>• Certificat final à partager</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Prêt à transformer votre carrière ?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'apprenants qui ont déjà développé leurs soft skills 
            avec PowerSkills. Votre premier emploi vous attend !
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-6 bg-background text-primary hover:bg-background/90"
            onClick={() => navigate('/signup')}
          >
            <Play className="h-5 w-5 mr-2" />
            Commencer maintenant
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 PowerSkills. Développé pour l'excellence professionnelle.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
