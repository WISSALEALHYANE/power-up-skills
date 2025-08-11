import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Gamepad2, Star, Lock, Play, Trophy, LogOut, User } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  // Niveaux de compétences selon le cahier des charges
  const levels = [
    { id: 1, title: "Communiquer efficacement", description: "Savoir s'exprimer clairement à l'oral et à l'écrit", stars: 4, unlocked: true, completed: true },
    { id: 2, title: "Rédiger des e-mails professionnels", description: "Structurer et adapter un e-mail selon le destinataire", stars: 3, unlocked: true, completed: true },
    { id: 3, title: "Prendre la parole en public", description: "Structurer une idée à l'oral, gérer le stress", stars: 5, unlocked: true, completed: true },
    { id: 4, title: "Travailler en équipe", description: "Comprendre les bases de la collaboration", stars: 2, unlocked: true, completed: false },
    { id: 5, title: "Gérer son temps et ses priorités", description: "Savoir organiser ses tâches et respecter les délais", stars: 0, unlocked: false, completed: false },
    { id: 6, title: "Donner et recevoir un feedback", description: "Formuler une critique constructive", stars: 0, unlocked: false, completed: false },
    { id: 7, title: "Adapter son comportement en milieu pro", description: "Comprendre les codes du monde du travail", stars: 0, unlocked: false, completed: false },
    { id: 8, title: "Maîtrise émotionnelle", description: "Garder son sang-froid en situation de stress", stars: 0, unlocked: false, completed: false },
  ];

  const completedLevels = levels.filter(level => level.completed).length;
  const totalStars = levels.reduce((acc, level) => acc + level.stars, 0);
  const progressPercentage = (completedLevels / levels.length) * 100;

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (!email) {
      navigate('/login');
    } else {
      setUserEmail(email);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  const handleLevelClick = (level: any) => {
    if (level.unlocked) {
      navigate(`/level/${level.id}`);
    }
  };

  const renderStars = (stars: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= stars 
                ? "fill-yellow-400 text-yellow-400" 
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                <Gamepad2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  PowerSkills
                </h1>
                <p className="text-sm text-muted-foreground">Tableau de bord</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4" />
                <span>{userEmail}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-accent/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{completedLevels}/8</p>
                  <p className="text-sm text-muted-foreground">Niveaux complétés</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-accent/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-yellow-100">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalStars}</p>
                  <p className="text-sm text-muted-foreground">Étoiles obtenues</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-accent/10">
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">Progression</p>
                  <p className="text-sm text-muted-foreground">{Math.round(progressPercentage)}%</p>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Levels Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Mission Soft Skills</h2>
            <p className="text-muted-foreground">Objectif : Premier Emploi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {levels.map((level) => (
              <Card 
                key={level.id}
                className={`relative border-0 shadow-lg transition-all duration-300 cursor-pointer ${
                  level.unlocked 
                    ? "hover:shadow-xl hover:scale-105 bg-gradient-to-br from-card to-accent/10" 
                    : "opacity-60 bg-muted/50"
                }`}
                onClick={() => handleLevelClick(level)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={level.completed ? "default" : level.unlocked ? "secondary" : "outline"}>
                      Niveau {level.id}
                    </Badge>
                    {!level.unlocked && <Lock className="h-4 w-4 text-muted-foreground" />}
                    {level.unlocked && !level.completed && <Play className="h-4 w-4 text-primary" />}
                    {level.completed && <Trophy className="h-4 w-4 text-primary" />}
                  </div>
                  <CardTitle className="text-lg leading-tight">{level.title}</CardTitle>
                  <CardDescription className="text-xs">{level.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    {renderStars(level.stars)}
                    {level.unlocked && (
                      <Button variant={level.completed ? "game" : "default"} size="sm">
                        {level.completed ? "Rejouer" : "Jouer"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Finale */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gradient-to-br from-primary to-primary-glow">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">Mission Finale</CardTitle>
                  <CardDescription>Entretien d'embauche - Mobilisez toutes vos compétences</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Débloqué après 6 niveaux complétés</p>
                  <p className="text-xs text-muted-foreground">Score requis : 70/100 pour obtenir le certificat</p>
                </div>
                <Button 
                  variant="hero" 
                  disabled={completedLevels < 6}
                  className="disabled:opacity-50"
                >
                  {completedLevels >= 6 ? "Commencer" : "Verrouillé"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;