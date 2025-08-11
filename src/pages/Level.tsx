import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Star } from "lucide-react";

const Level = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const levels = [
    {
      id: 1,
      title: "Communiquer efficacement",
      description: "Savoir s'exprimer clairement à l'oral et à l'écrit dans un cadre professionnel",
      game: "La Bonne Réplique",
      difficulty: "Débutant",
      duration: "15 min"
    },
    {
      id: 2,
      title: "Rédiger des e-mails professionnels",
      description: "Structurer et adapter un e-mail selon le destinataire et l'objectif",
      game: "Écriture Interactive",
      difficulty: "Débutant",
      duration: "20 min"
    },
    {
      id: 3,
      title: "Prendre la parole en public",
      description: "Structurer une idée à l'oral, gérer le stress, capter l'attention",
      game: "Pitch Challenge",
      difficulty: "Intermédiaire",
      duration: "25 min"
    },
    {
      id: 4,
      title: "Travailler en équipe",
      description: "Comprendre les bases de la collaboration, gérer les conflits, écouter activement",
      game: "Jeu de Rôles",
      difficulty: "Intermédiaire",
      duration: "30 min"
    },
    {
      id: 5,
      title: "Gérer son temps et ses priorités",
      description: "Savoir organiser ses tâches et respecter les délais",
      game: "Planification Interactive",
      difficulty: "Intermédiaire",
      duration: "20 min"
    },
    {
      id: 6,
      title: "Donner et recevoir un feedback",
      description: "Savoir formuler une critique constructive et accepter les remarques",
      game: "Feedback Master",
      difficulty: "Avancé",
      duration: "25 min"
    },
    {
      id: 7,
      title: "Adapter son comportement en milieu pro",
      description: "Comprendre les codes du monde du travail",
      game: "Vrai ou Faux Pro",
      difficulty: "Avancé",
      duration: "15 min"
    },
    {
      id: 8,
      title: "Maîtrise émotionnelle en situation de stress",
      description: "Savoir garder son sang-froid, analyser une situation, trouver des solutions",
      game: "Escape Game Narratif",
      difficulty: "Expert",
      duration: "35 min"
    }
  ];

  const currentLevel = levels.find(level => level.id === parseInt(id || "1"));

  if (!currentLevel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-primary/5">
        <Card className="w-full max-w-md">
          <CardContent className="text-center p-6">
            <h2 className="text-xl font-bold mb-4">Niveau introuvable</h2>
            <Button onClick={() => navigate('/dashboard')}>
              Retour au tableau de bord
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "bg-green-500";
      case "Intermédiaire": return "bg-yellow-500";
      case "Avancé": return "bg-orange-500";
      case "Expert": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-primary/5 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au tableau de bord
          </Button>
        </div>

        <Card className="border-0 bg-card/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Niveau {currentLevel.id}</Badge>
                  <Badge 
                    className={`text-white ${getDifficultyColor(currentLevel.difficulty)}`}
                  >
                    {currentLevel.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">
                  {currentLevel.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {currentLevel.description}
                </CardDescription>
              </div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="h-5 w-5 text-muted-foreground" 
                    fill="none"
                  />
                ))}
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Play className="h-5 w-5 mr-2" />
                {currentLevel.game}
              </CardTitle>
              <CardDescription>
                Durée estimée : {currentLevel.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Contenu du jeu à venir</p>
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Commencer le niveau
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Objectifs d'apprentissage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Comprendre les concepts clés</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Appliquer les bonnes pratiques</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Réussir les mises en situation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Obtenir 3 étoiles minimum</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Level;