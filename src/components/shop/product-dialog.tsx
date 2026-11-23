import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { categoryName, type Product } from "@/data/store";

type ProductDialogProps = {
  product: Product | null;
  onClose: () => void;
};

export function ProductDialog({ product, onClose }: ProductDialogProps) {
  return (
    <Dialog.Root open={product !== null} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/75 backdrop-blur-sm" />
        <Dialog.Content className="sheet fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-card border border-line bg-panel">
          {product ? (
            <div className="sheet-grid grid md:grid-cols-2">
              <div className="min-w-0 overflow-hidden bg-ink">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover md:aspect-4/5"
                />
              </div>
              <div className="flex min-w-0 flex-col p-6 md:p-8">
                <p className="text-xs tracking-widest text-ember uppercase">
                  {categoryName(product.category)}
                </p>
                <Dialog.Title className="font-display mt-3 text-4xl text-ivory">{product.name}</Dialog.Title>
                <Dialog.Description className="mt-4 text-sm leading-relaxed text-mist">
                  {product.detail}
                </Dialog.Description>
                <p className="font-display mt-6 text-3xl text-ivory">{product.price}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#visit"
                    className="press rounded-full bg-ember px-5 py-3 text-sm font-medium text-ink"
                    onClick={onClose}
                  >
                    Ask at the counter
                  </a>
                  <Dialog.Close className="press rounded-full border border-line px-5 py-3 text-sm text-ivory">
                    Close
                  </Dialog.Close>
                </div>
                <p className="mt-6 text-xs text-mist">Display only. We do not take payment here.</p>
              </div>
            </div>
          ) : null}
          <Dialog.Close
            className="press absolute top-3 right-3 grid size-11 place-items-center rounded-full bg-ink/80 text-ivory"
            aria-label="Close"
          >
            <X className="size-5" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
