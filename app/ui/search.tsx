import React, { KeyboardEvent } from 'react';

interface Service {
  name: string;
  code: string;
}

const services: Service[] = [
  { name: "1-1 classes", code: "1-1"},
  { name: "Custom colouring", code: "cc"},
  { name: "Custom wigs", code: "cw"},
  { name: "Pre-made units", code: "pmu"},
  { name: "Natural hair maintenance", code: "nhm"},
  { name: "Ponytails", code: "pt"},
  { name: "Sewins", code: "sewins"},
  { name: "Hair wash", code: "hw"},
  { name: "Relaxer", code: "relaxer"},
  { name: "Lace frontal wig", code: "lfw"},
  { name: "Lace closure", code: "lc"},
  { name: "Shape ups", code: "sh"},
  { name: "Skin fade", code: "sf"},
  { name: "Trim", code: "trim"},
  { name: "Beard shaping", code: "bs"},
  { name: "Waves", code: "waves"},
  { name: "Braids", code: "braids"},
  { name: "Wash and go", code: "wag"},
  { name: "Dreadlocks", code: "dreds"},
  { name: "Mobile hair services", code: "mhs"},
  { name: "Weddings", code: "weddings"},
  { name: "Photoshoots", code: "pshoots"},
  { name: "Prom", code: "prom"},
  { name: "Grooming", code: "groom"},  
];

const Search: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  function onkeyUp(e: KeyboardEvent<HTMLInputElement>): void {
    let keyword: string = e.currentTarget.value;
    let dropdownEl: HTMLElement | null = document.querySelector("#dropdown");
    if (dropdownEl) {
      dropdownEl.classList.remove("hidden");
    }
    let filteredServices: Service[] = services.filter((c) =>
      c.name.toLowerCase().includes(keyword.toLowerCase())
    );
    renderOptions(filteredServices);
  }

  function renderOptions(options: Service[]): void {
    let dropdownEl: HTMLElement | null = document.querySelector("#dropdown");
    if (dropdownEl) {
      dropdownEl.innerHTML = ''; // Clear previous content

      options.forEach((service) => {
        let optionDiv = document.createElement("div");
        optionDiv.dataset.value = service.code; // Use dataset to store custom data (code in this case)
        optionDiv.classList.add(
          "relative",
          "px-5",
          "py-3",
          "border-b",
          "border-gray-200",
          "text-stone-600",
          "cursor-pointer",
          "hover:bg-slate-100",
          "transition-colors"
        );
        optionDiv.textContent = service.name;
        optionDiv.addEventListener("click", () => selectOption(service.name));

        if (dropdownEl) {
          dropdownEl.appendChild(optionDiv);
        }
      });

      if (dropdownEl) {
        dropdownEl.classList.remove("hidden");
      }
    }
  }

  function selectOption(selectedOption: string): void {
    hideDropdown();
    let input: HTMLInputElement | null = document.querySelector("#autocompleteInput");
    if (input) {
      input.value = selectedOption;
    }
  }

  function hideDropdown(): void {
    let dropdownEl: HTMLElement | null = document.querySelector("#dropdown");
    if (dropdownEl) {
      dropdownEl.classList.add("hidden");
    }
  }

  return (
    <div className="relative my-2 flex flex-1 flex-shrink-0">
      <label htmlFor="autocompleteInput" className="sr-only">
        Search
      </label>
      <input
        className="peer flex w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        name="treatments"
        id="autocompleteInput"
        onKeyUp={onkeyUp}
      />
      <div
        id="dropdown"
        className="absolute top-[40px] z-50 w-full h-60 border border-gray-200 rounded-md text-sm outline-2 bg-white overflow-y-auto hidden"
      ></div>
    </div>
  );
};

export default Search;
