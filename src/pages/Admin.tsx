import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, BarChart3, Settings, LogOut } from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role !== 'admin') {
      navigate('/login');
      return;
    }
    setUserRole(role);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  const stats = [
    { title: "Utilisateurs Actifs", value: "156", icon: Users, change: "+12%" },
    { title: "Niveaux Complétés", value: "1,234", icon: BookOpen, change: "+8%" },
    { title: "Taux de Réussite", value: "87%", icon: BarChart3, change: "+5%" },
    { title: "Badges Obtenus", value: "89", icon: Settings, change: "+15%" }
  ];

  if (userRole !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-primary/5">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Administration PowerSkills
            </h1>
            <p className="text-muted-foreground mt-2">
              Tableau de bord administrateur
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <Badge variant="secondary" className="mt-1">
                      {stat.change}
                    </Badge>
                  </div>
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Gestion des Utilisateurs</CardTitle>
              <CardDescription>
                Gérer les comptes utilisateurs et leurs progressions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">admin@powerskills.com</p>
                    <p className="text-sm text-muted-foreground">Administrateur</p>
                  </div>
                  <Badge>Admin</Badge>
                </div>
                <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">user@powerskills.com</p>
                    <p className="text-sm text-muted-foreground">Utilisateur standard</p>
                  </div>
                  <Badge variant="secondary">User</Badge>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline">
                Gérer tous les utilisateurs
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Gestion des Contenus</CardTitle>
              <CardDescription>
                Créer et modifier les niveaux et activités
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" variant="hero">
                  Créer un nouveau niveau
                </Button>
                <Button className="w-full" variant="outline">
                  Modifier les niveaux existants
                </Button>
                <Button className="w-full" variant="outline">
                  Gérer les badges et certificats
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;