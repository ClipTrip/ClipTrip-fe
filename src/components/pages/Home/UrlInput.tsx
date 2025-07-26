import ButtonIcon from "@/components/common/ButtonIcon";
import ArrowUpIcon from "@/components/icons/system/ArrowUpIcon";
import VideosLoading from "@/components/pages/Home/VideosLoading";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

interface UrlInputProps {
  onSearch: (url: string) => void;
  isPending: boolean;
}

const UrlInput = ({ onSearch, isPending }: UrlInputProps) => {
  const { t } = useTranslation("textField");
  const urlRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (urlRef.current?.value) onSearch(urlRef.current?.value);
  };

  return (
    <>
      {isPending && <VideosLoading />}
      <div className="w-[312px] h-fit bg-sy_container-neutral-normal rounded-016">
        <form onSubmit={handleSubmit} className="relative">
          <input
            placeholder={t("textField_url")}
            data-slot="input"
            className={cn(
              "placeholder:label_m placeholder:text-sy_label-light w-full h-14 p-012 rounded-016 outline-none pr-14 text-sy_label-normal label_m",
              "focus:border focus:border-sy_line-super"
            )}
            ref={urlRef}
          />

          <ButtonIcon
            className="absolute rounded-016 right-1 top-1 bg-neutral-10 active:bg-neutral-10 [&>svg]:text-sy_icon-neutral-white"
            Icon={ArrowUpIcon}
            disabled={isPending}
          />
        </form>
      </div>
    </>
  );
};

export default UrlInput;
