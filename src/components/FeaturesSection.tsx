
import { useState } from "react";
import { Check, GraduationCap, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const FeaturesSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    universityName: "",
    contactName: "",
    contactEmail: "",
    contactPosition: "",
    studentCount: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        universityName: "",
        contactName: "",
        contactEmail: "",
        contactPosition: "",
        studentCount: "",
        message: ""
      });
    }, 1500);
  };
  // Removed two items from the benefits array
  const benefits = ["Ефективна комуникация между студенти и преподаватели", "Централизирана информационна система за всички университетски дейности", "Интеграция с партньорски фирми за стажове и работа"];
  return <section id="features" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-ultra-violet mb-4">За университети</h2>
          <p className="text-ultra-violet/80 max-w-2xl mx-auto text-lg">
            Подобрете учебния процес и комуникацията с интелигентна платформа за управление на университетски дейности
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-ultra-violet mb-6">Заявете демонстрация</h3>
            <p className="text-ultra-violet/70 mb-8">
              Попълнете формата по-долу и нашият екип ще се свърже с вас за персонализирана демонстрация на Megdan за вашия университет
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="universityName">Име на университета</Label>
                <Input id="universityName" name="universityName" placeholder="Въведете име на университета" value={formData.universityName} onChange={handleInputChange} required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Име и фамилия</Label>
                  <Input id="contactName" name="contactName" placeholder="Въведете име и фамилия" value={formData.contactName} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPosition">Длъжност</Label>
                  <Input id="contactPosition" name="contactPosition" placeholder="Въведете длъжност" value={formData.contactPosition} onChange={handleInputChange} required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Служебен имейл</Label>
                <Input id="contactEmail" name="contactEmail" type="email" placeholder="служебен@университет.бг" value={formData.contactEmail} onChange={handleInputChange} required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="studentCount">Приблизителен брой студенти</Label>
                <Select value={formData.studentCount} onValueChange={handleSelectChange("studentCount")} required>
                  <SelectTrigger id="studentCount">
                    <SelectValue placeholder="Изберете брой студенти" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="< 1000">По-малко от 1000</SelectItem>
                    <SelectItem value="1000-5000">1000-5000</SelectItem>
                    <SelectItem value="5000-10000">5000-10000</SelectItem>
                    <SelectItem value="10000-20000">10000-20000</SelectItem>
                    <SelectItem value="> 20000">Повече от 20000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Допълнителна информация</Label>
                <Textarea id="message" name="message" placeholder="Споделете повече за вашите нужди и очаквания" className="h-24" value={formData.message} onChange={handleInputChange} />
              </div>
              
              <Button type="submit" className="w-full bg-iris hover:bg-iris/90" disabled={isSubmitting}>
                {isSubmitting ? "Изпращане..." : "Заявете демонстрация"}
              </Button>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-iris/10 h-full">
            <h3 className="text-2xl font-semibold text-ultra-violet mb-6 flex items-center gap-2">
              <School className="h-6 w-6 text-iris" />
              Ползи за университета
            </h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="w-5 h-5 text-screamin-green" />
                  </div>
                  <p className="text-ultra-violet/80">{benefit}</p>
                </div>)}
            </div>
            
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-myrtle-green via-iris to-screamin-green opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <GraduationCap className="mx-auto h-16 w-16 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Университетски админ панел</h4>
                  <p className="opacity-90">Управлявайте студенти, курсове и съдържание от един централен интерфейс</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;
