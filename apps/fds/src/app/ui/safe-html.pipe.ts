import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value: any): any {
    const sanitizedContent = this.sanitizer.sanitize(SecurityContext.NONE, value);
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
  }
}
