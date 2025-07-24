import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useAirtablePro } from "@/hooks/useAirtablePro";
import Header from "@/components/ui/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Star, Check, MapPin, Phone, MessageCircle } from "lucide-react";

export default function ProProfile() {
  const { proId } = useParams<{ proId: string }>();
  const { pro, loading, error } = useAirtablePro(proId || "");

  if (!proId) {
    return <Navigate to="/services" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-6">
            <Skeleton className="h-10 w-32 mb-4" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <Skeleton className="w-32 h-32 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-40 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto mb-2" />
                  <Skeleton className="h-4 w-32 mx-auto mb-4" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <Skeleton className="h-8 w-48 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />
                  <Skeleton className="h-6 w-32 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !pro) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-destructive mb-4">Professional Not Found</h1>
            <p className="text-muted-foreground mb-6">
              {error || "The professional you're looking for doesn't exist or has been removed."}
            </p>
            <Button asChild>
              <Link to="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const whatsappNumber = "+230 5921 4463";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your services on Alanula. Can we chat?");
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/services">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Pro info card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <img
                    src={pro.photo || "/placeholder.svg"}
                    alt={pro.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg mx-auto"
                  />
                  {pro.verified && (
                    <div className="absolute -bottom-2 -right-2 left-1/2 transform -translate-x-1/2">
                      <Check className="bg-primary text-white rounded-full p-1" size={32} />
                    </div>
                  )}
                </div>

                <h1 className="text-2xl font-bold font-poppins text-primary mb-2">{pro.name}</h1>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{pro.location}</span>
                </div>

                <Badge variant="secondary" className="mb-4">{pro.category}</Badge>

                {pro.featured && (
                  <Badge className="bg-yellow-300 text-yellow-800 mb-4 flex items-center gap-1 w-fit mx-auto">
                    <Star size={16} className="text-yellow-500" />
                    Featured Pro
                  </Badge>
                )}

                <div className="text-3xl font-bold text-secondary mb-6">
                  Rs {pro.price}
                  <span className="text-sm text-muted-foreground font-normal ml-1">/start</span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mb-4">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with Alanula Pro
                  </Button>
                </a>

                <div className="text-xs text-muted-foreground">
                  Click to chat directly with our team about this service
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Detailed information */}
          <div className="lg:col-span-2 space-y-6">
            {/* About section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold font-poppins text-secondary mb-4">About {pro.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {pro.summary || "No detailed description available yet."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Location</div>
                      <div className="text-muted-foreground text-sm">{pro.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Category</div>
                      <div className="text-muted-foreground text-sm">{pro.category}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services & Pricing */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold font-poppins text-secondary mb-4">Services & Pricing</h2>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{pro.category}</div>
                      <div className="text-sm text-muted-foreground">Starting price</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">Rs {pro.price}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Prices may vary based on specific requirements. Contact {pro.name} for detailed quotes.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold font-poppins text-secondary mb-4">Get in Touch</h2>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Direct Chat Available</span>
                  </div>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Chat directly with our Alanula team about {pro.name}'s services. We'll connect you and help coordinate your booking.
                  </p>
                </div>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with Alanula Pro
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}