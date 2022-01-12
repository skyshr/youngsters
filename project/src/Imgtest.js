import html2canvas from 'html2canvas';
import * as clipboard from 'clipboard-polyfill';
import { ClipboardItem } from 'clipboard-polyfill';

export const useClipboard = () => {
  const ref = useRef(null);

  const clipboardHandler = () => {
    if (ref) {
      html2canvas(ref).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob) {
            clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          }
        });
      });
    }
  };

  return { ref, clipboardHandler };
};