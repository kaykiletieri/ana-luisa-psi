import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appScrollAnimate]',
    standalone: true
})
export class ScrollAnimateDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    this.el.nativeElement.classList.add('visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(this.el.nativeElement);
    }
}