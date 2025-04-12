import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, UserRound } from "lucide-react";
const DownloadSection = () => {
  return <section id="download" className="section-padding bg-myrtle-green text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Готови ли сте да се присъедините към останалите студенти от вашия университет?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">Megdan работи директно с твоя университет. Няма нужда от регистрация – просто влез с имейла си и открий какво се случва около теб.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-screamin-green hover:bg-screamin-green/90 text-ultra-violet text-lg px-8 py-6">
            Изтеглете за iOS
          </Button>
          <Button className="bg-screamin-green hover:bg-screamin-green/90 text-ultra-violet text-lg px-8 py-6">
            Изтеглете за Android
          </Button>
        </div>
        
        <div className="mt-12 flex flex-col items-center">
          <p className="text-white/80 mb-4">Нашият екип</p>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            {/* First female avatar */}
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
              <Avatar className="w-14 h-14 border-2 border-white/20">
                <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Female team member" />
                <AvatarFallback className="bg-iris/80 text-white">
                  <User className="h-7 w-7" />
                </AvatarFallback>
              </Avatar>
            </div>
            
            {/* First male avatar */}
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
              <Avatar className="w-14 h-14 border-2 border-white/20">
                <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Male team member" />
                <AvatarFallback className="bg-iris/80 text-white">
                  <UserRound className="h-7 w-7" />
                </AvatarFallback>
              </Avatar>
            </div>
            
            {/* Second female avatar */}
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
              <Avatar className="w-14 h-14 border-2 border-white/20">
                <AvatarImage src="https://i.pravatar.cc/150?img=9" alt="Female team member" />
                <AvatarFallback className="bg-iris/80 text-white">
                  <User className="h-7 w-7" />
                </AvatarFallback>
              </Avatar>
            </div>
            
            {/* Second male avatar */}
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
              <Avatar className="w-14 h-14 border-2 border-white/20">
                <AvatarImage src="https://i.pravatar.cc/150?img=67" alt="Male team member" />
                <AvatarFallback className="bg-iris/80 text-white">
                  <UserRound className="h-7 w-7" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DownloadSection;