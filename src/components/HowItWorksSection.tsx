import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
const universities = ["Софийски университет", "Технически университет - София", "УНСС", "Медицински университет - София", "Нов български университет", "Американски университет в България"];
const majors = ["Компютърни науки", "Софтуерно инженерство", "Информатика", "Електроника", "Финанси", "Маркетинг", "Медицина", "Биология", "Икономика", "Право"];
const benefits = ["Свържете се директно със студенти от избраната специалност", "Получете реална представа за университетския живот", "Задайте въпроси за приемния процес", "Разберете какво е нужно за успех в избраната специалност"];
const HowItWorksSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    major: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Заявката е изпратена успешно!",
        description: "Нашият екип ще се свърже с вас скоро на посочения имейл."
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        university: "",
        major: ""
      });
    }, 1500);
  };
  return <section id="how-it-works" className="section-padding bg-ultra-violet text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Предстои ви кандидатстване?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Попълнете формата, за да се свържете с настоящ студент от избраната специалност и университет. Получете ценни съвети от първа ръка!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">Име</Label>
                  <Input id="firstName" name="firstName" placeholder="Въведете име" className="bg-white/10 border-iris/30 text-white placeholder:text-white/50" value={formData.firstName} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">Фамилия</Label>
                  <Input id="lastName" name="lastName" placeholder="Въведете фамилия" className="bg-white/10 border-iris/30 text-white placeholder:text-white/50" value={formData.lastName} onChange={handleInputChange} required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Имейл</Label>
                <Input id="email" name="email" type="email" placeholder="вашият@имейл.com" className="bg-white/10 border-iris/30 text-white placeholder:text-white/50" value={formData.email} onChange={handleInputChange} required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="university" className="text-white">Желан университет</Label>
                <Select value={formData.university} onValueChange={handleSelectChange("university")} required>
                  <SelectTrigger id="university" className="bg-white/10 border-iris/30 text-white">
                    <SelectValue placeholder="Изберете университет" />
                  </SelectTrigger>
                  <SelectContent>
                    {universities.map(uni => <SelectItem key={uni} value={uni}>
                        {uni}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="major" className="text-white">Желана специалност</Label>
                <Select value={formData.major} onValueChange={handleSelectChange("major")} required>
                  <SelectTrigger id="major" className="bg-white/10 border-iris/30 text-white">
                    <SelectValue placeholder="Изберете специалност" />
                  </SelectTrigger>
                  <SelectContent>
                    {majors.map(major => <SelectItem key={major} value={major}>
                        {major}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full bg-screamin-green hover:bg-screamin-green/90 text-ultra-violet mt-4" disabled={isSubmitting}>
                {isSubmitting ? "Изпращане..." : "Изпрати заявка"}
              </Button>
            </form>
          </div>
          
          <div className="bg-iris/10 p-8 rounded-xl border border-iris/30">
            <h3 className="text-2xl font-semibold mb-6">Какви са ползите?</h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="w-5 h-5 text-screamin-green" />
                  </div>
                  <p>{benefit}</p>
                </div>)}
            </div>
            
            <div className="bg-iris/20 p-4 rounded-lg">
              <p className="text-sm italic">
                "След подаване на заявката, нашият екип ще провери наличието на система за избрания университет. 
                Ще получите имейл с временни данни за достъп, за да се свържете с активен студент от избраната специалност."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-iris/20 blur-3xl"></div>
    </section>;
};
export default HowItWorksSection;