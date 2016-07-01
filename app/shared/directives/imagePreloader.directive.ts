import { Directive, Renderer, ElementRef, HostListener } from '@angular/core'

@Directive({
    selector:'[imagePreloader]'
})
export class ImagePreloaderDirective{
    time: Date = new Date()
    loader: any
    constructor(private el: ElementRef, private renderer: Renderer){
       this.el.nativeElement.style.display = 'none';
       this.loader = document.createElement('i');
       this.loader.className = "fa fa-spinner fa-spin fa-3x";
       this.el.nativeElement.parentElement.appendChild(this.loader);

    }

    hideLoader(): void {
        this.el.nativeElement.style.display = '';
        this.el.nativeElement.parentElement.removeChild(this.loader);        
    }

    @HostListener('load')
    onLoad() {
        this.hideLoader();
    }

    @HostListener('error')
    onError() {
        if(this.el.nativeElement.attributes.src.value != 'http://placehold.it/400x400') {
            this.el.nativeElement.setAttribute('src', 'http://placehold.it/400x400');
        } else {
            this.hideLoader();
        }
    }
}