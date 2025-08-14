import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import SearchIcon from "@/components/icons/system/SearchIcon.tsx";

interface DataOption {
  value: string;
  label: string;
}

interface SearchFieldV2Props {
  datas: DataOption[];
  placeHolder?: string;
  onChange?: (val: string) => void;
}

const SearchFieldV2 = ({ datas, placeHolder, onChange }: SearchFieldV2Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // 검색어가 있을 때만 필터링, 없으면 전체 리스트 반환
  const filteredDatas = useMemo(() => {
    if (!searchTerm) return datas;
    return datas.filter((d) =>
      d.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, datas]);

  return (
    <div className="pl-024 pr-024 w-full relative">
      <div className="flex relative">
        <input
          data-slot='search'
          placeholder={isFocused ? "": placeHolder}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsFocused(true);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setTimeout(() => setIsFocused(false), 100);
          }}
          className={cn(
            'p-012 py-016 bg-sy_container-neutral-normal rounded-020 body_m-prominent w-full outline-none placeholder:text-sy_label-normal',
            isFocused ? "border-sy_line-super border relative z-50" : "border-none"
          )}
        />
        <SearchIcon className={cn(
          "absolute text-sy_icon-neutral-alternative top-1/2 -translate-y-1/2 right-3",
          isFocused ? "z-50" : ""
        )}/>
      </div>

      {isFocused && (
        <div
          className="absolute mt-[-20px] w-[312px] pt-020 bg-sy_container-neutral-normal rounded-020 shadow-lg z-40 max-h-60 overflow-y-auto">
          {filteredDatas.length > 0 ? (
            filteredDatas.map((data) => (
              <div
                key={data.value}
                className="p-012 hover:bg-sy_container-hover hover:text-sy_label-normal body_m-prominent cursor-pointer text-sy_label-alternative"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setSearchTerm(data.label);
                  if (onChange) onChange(data.value);
                  setIsFocused(false);
                }}
              >
                {data.label}
              </div>
            ))
          ) : (
            <div className="p-012 text-sy_label-alternative">
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFieldV2;
