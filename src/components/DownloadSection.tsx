import { Button } from "@/components/ui/button";
const DownloadSection = () => {
  return <section id="download" className="section-padding bg-myrtle-green text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Готови ли сте да Трансформирате Вашето Изживяване?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
          Изтеглете нашето приложение днес и се присъединете към хилядите доволни потребители, които са трансформирали своето мобилно изживяване.
        </p>
        
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
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="text-xs">ЛОГО</span>
            </div>
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="text-xs">ЛОГО</span>
            </div>
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="text-xs">ЛОГО</span>
            </div>
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="text-xs">ЛОГО</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DownloadSection;