import { Template, Category } from "./types";

export const categories: Category[] = [
  {
    id: "khelshekrulebebi",
    name: "ხელშეკრულებები",
    slug: "khelshekrulebebi",
    description: "შრომითი, იჯარის და სხვა ხელშეკრულებები",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "cv-reziume",
    name: "CV / რეზიუმე",
    slug: "cv-reziume",
    description: "პროფესიონალური CV შაბლონები",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "gantskhadebebi",
    name: "განცხადებები",
    slug: "gantskhadebebi",
    description: "სამსახურებრივი განცხადებები",
    color: "from-amber-500 to-amber-600",
  },
];

export const templates: Template[] = [
  // Template 1: Employment Contract
  {
    id: "shromiti-khelshekruleba",
    slug: "shromiti-khelshekruleba",
    category: "khelshekrulebebi",
    title: "შრომითი ხელშეკრულება",
    description: "შრომითი ხელშეკრულების შაბლონი საქართველოს კანონმდებლობით",
    downloads: 12847,
    rating: 4.9,
    formats: ["docx", "pdf"],
    featured: true,
    sections: [
      {
        id: "employer",
        title: "დამსაქმებელი",
        fields: [
          {
            id: "employer_name",
            label: "კომპანიის დასახელება",
            type: "text",
            required: true,
          },
          {
            id: "employer_id",
            label: "საიდენტიფიკაციო კოდი",
            type: "text",
            required: true,
          },
          {
            id: "employer_address",
            label: "იურიდიული მისამართი",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "employee",
        title: "დასაქმებული",
        fields: [
          {
            id: "employee_name",
            label: "სახელი და გვარი",
            type: "text",
            required: true,
          },
          {
            id: "employee_id",
            label: "პირადი ნომერი",
            type: "text",
            required: true,
          },
          {
            id: "employee_phone",
            label: "ტელეფონი",
            type: "text",
            required: false,
          },
        ],
      },
      {
        id: "job",
        title: "სამუშაო პირობები",
        fields: [
          {
            id: "position",
            label: "თანამდებობა",
            type: "text",
            required: true,
          },
          {
            id: "salary",
            label: "ხელფასი (ლარი)",
            type: "number",
            required: true,
          },
          {
            id: "start_date",
            label: "დაწყების თარიღი",
            type: "date",
            required: true,
          },
        ],
      },
    ],
  },

  // Template 2: Lease Agreement
  {
    id: "ijaris-khelshekruleba",
    slug: "ijaris-khelshekruleba",
    category: "khelshekrulebebi",
    title: "იჯარის ხელშეკრულება (ბინა)",
    description: "ბინის იჯარის ხელშეკრულების შაბლონი",
    downloads: 9234,
    rating: 4.8,
    formats: ["docx", "pdf"],
    featured: true,
    sections: [
      {
        id: "landlord",
        title: "მეიჯარე (მესაკუთრე)",
        fields: [
          {
            id: "landlord_name",
            label: "სახელი და გვარი",
            type: "text",
            required: true,
          },
          {
            id: "landlord_id",
            label: "პირადი ნომერი",
            type: "text",
            required: true,
          },
          {
            id: "landlord_phone",
            label: "ტელეფონი",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "tenant",
        title: "მოიჯარე",
        fields: [
          {
            id: "tenant_name",
            label: "სახელი და გვარი",
            type: "text",
            required: true,
          },
          {
            id: "tenant_id",
            label: "პირადი ნომერი",
            type: "text",
            required: true,
          },
          {
            id: "tenant_phone",
            label: "ტელეფონი",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "property",
        title: "ქონება",
        fields: [
          {
            id: "property_address",
            label: "ბინის მისამართი",
            type: "text",
            required: true,
          },
          {
            id: "property_area",
            label: "ფართი (კვ.მ)",
            type: "number",
            required: true,
          },
          {
            id: "rooms",
            label: "ოთახების რაოდენობა",
            type: "number",
            required: true,
          },
        ],
      },
      {
        id: "terms",
        title: "პირობები",
        fields: [
          {
            id: "rent",
            label: "თვიური ქირა (ლარი)",
            type: "number",
            required: true,
          },
          {
            id: "deposit",
            label: "გირაო (ლარი)",
            type: "number",
            required: true,
          },
          {
            id: "start_date",
            label: "იჯარის დაწყება",
            type: "date",
            required: true,
          },
          {
            id: "end_date",
            label: "იჯარის დასრულება",
            type: "date",
            required: true,
          },
        ],
      },
    ],
  },

  // Template 3: Resignation Letter
  {
    id: "gantskhadeba-gathavisuflebaze",
    slug: "gantskhadeba-gathavisuflebaze",
    category: "gantskhadebebi",
    title: "განცხადება გათავისუფლებაზე",
    description: "სამსახურიდან გათავისუფლების განცხადება",
    downloads: 6543,
    rating: 4.6,
    formats: ["docx", "pdf"],
    featured: true,
    sections: [
      {
        id: "company",
        title: "კომპანია",
        fields: [
          {
            id: "company_name",
            label: "კომპანიის დასახელება",
            type: "text",
            required: true,
          },
          {
            id: "director_name",
            label: "დირექტორის სახელი",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "employee",
        title: "თანამშრომელი",
        fields: [
          {
            id: "employee_name",
            label: "თქვენი სახელი და გვარი",
            type: "text",
            required: true,
          },
          {
            id: "position",
            label: "თქვენი თანამდებობა",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "details",
        title: "დეტალები",
        fields: [
          {
            id: "last_day",
            label: "ბოლო სამუშაო დღე",
            type: "date",
            required: true,
          },
          {
            id: "reason",
            label: "მიზეზი (არასავალდებულო)",
            type: "text",
            required: false,
          },
        ],
      },
    ],
  },
  // Template 5: Invoice
  {
    id: "invoisi",
    slug: "invoisi",
    category: "khelshekrulebebi",
    title: "ინვოისი",
    description: "ინვოისის შაბლონი მომსახურების ან საქონლის გაყიდვისთვის",
    downloads: 8921,
    rating: 4.7,
    formats: ["docx", "pdf"],
    featured: false,
    sections: [
      {
        id: "seller",
        title: "გამყიდველი",
        fields: [
          {
            id: "seller_name",
            label: "კომპანიის დასახელება",
            type: "text",
            required: true,
          },
          {
            id: "seller_id",
            label: "საიდენტიფიკაციო კოდი",
            type: "text",
            required: true,
          },
          {
            id: "seller_address",
            label: "მისამართი",
            type: "text",
            required: true,
          },
          {
            id: "seller_bank",
            label: "საბანკო ანგარიში",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "buyer",
        title: "მყიდველი",
        fields: [
          {
            id: "buyer_name",
            label: "კომპანია / სახელი",
            type: "text",
            required: true,
          },
          {
            id: "buyer_id",
            label: "საიდენტიფიკაციო კოდი",
            type: "text",
            required: false,
          },
          {
            id: "buyer_address",
            label: "მისამართი",
            type: "text",
            required: false,
          },
        ],
      },
      {
        id: "invoice_details",
        title: "ინვოისის დეტალები",
        fields: [
          {
            id: "invoice_number",
            label: "ინვოისის ნომერი",
            type: "text",
            required: true,
          },
          { id: "invoice_date", label: "თარიღი", type: "date", required: true },
          {
            id: "due_date",
            label: "გადახდის ვადა",
            type: "date",
            required: true,
          },
        ],
      },
      {
        id: "items",
        title: "მომსახურება / საქონელი",
        fields: [
          {
            id: "item1_name",
            label: "დასახელება",
            type: "text",
            required: true,
          },
          {
            id: "item1_quantity",
            label: "რაოდენობა",
            type: "number",
            required: true,
          },
          {
            id: "item1_price",
            label: "ფასი (ლარი)",
            type: "number",
            required: true,
          },
          { id: "total", label: "ჯამი (ლარი)", type: "number", required: true },
        ],
      },
    ],
  },

  // Template 6: Power of Attorney
  {
    id: "mindobeloba",
    slug: "mindobeloba",
    category: "khelshekrulebebi",
    title: "მინდობილობა",
    description: "უფლებამოსილების გადაცემის მინდობილობის შაბლონი",
    downloads: 5432,
    rating: 4.6,
    formats: ["docx", "pdf"],
    featured: false,
    sections: [
      {
        id: "principal",
        title: "მარწმუნებელი",
        fields: [
          {
            id: "principal_name",
            label: "სახელი და გვარი",
            type: "text",
            required: true,
          },
          {
            id: "principal_id",
            label: "პირადი ნომერი",
            type: "text",
            required: true,
          },
          {
            id: "principal_address",
            label: "მისამართი",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "agent",
        title: "რწმუნებული",
        fields: [
          {
            id: "agent_name",
            label: "სახელი და გვარი",
            type: "text",
            required: true,
          },
          {
            id: "agent_id",
            label: "პირადი ნომერი",
            type: "text",
            required: true,
          },
          {
            id: "agent_address",
            label: "მისამართი",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "authority",
        title: "უფლებამოსილება",
        fields: [
          {
            id: "authority_description",
            label: "რას ანიჭებთ უფლებას",
            type: "text",
            required: true,
          },
          {
            id: "valid_from",
            label: "მოქმედების დაწყება",
            type: "date",
            required: true,
          },
          {
            id: "valid_until",
            label: "მოქმედების დასრულება",
            type: "date",
            required: true,
          },
        ],
      },
    ],
  },

  // Template 7: Loan Agreement
  {
    id: "seskhis-khelshekruleba",
    slug: "seskhis-khelshekruleba",
    category: "khelshekrulebebi",
    title: "სესხის ხელშეკრულება",
    description: "ფიზიკურ პირებს შორის სესხის ხელშეკრულება",
    downloads: 7123,
    rating: 4.8,
    formats: ["docx", "pdf"],
    featured: false,
    sections: [
      {
        id: "lender",
        title: "გამსესხებელი",
        fields: [
          {
            id: "lender_name",
            label: "სახელი და გვარი",
            type: "text",
            required: true,
          },
          {
            id: "lender_id",
            label: "პირადი ნომერი",
            type: "text",
            required: true,
          },
          {
            id: "lender_address",
            label: "მისამართი",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "borrower",
        title: "მსესხებელი",
        fields: [
          {
            id: "borrower_name",
            label: "სახელი და გვარი",
            type: "text",
            required: true,
          },
          {
            id: "borrower_id",
            label: "პირადი ნომერი",
            type: "text",
            required: true,
          },
          {
            id: "borrower_address",
            label: "მისამართი",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "loan",
        title: "სესხის პირობები",
        fields: [
          {
            id: "loan_amount",
            label: "სესხის თანხა (ლარი)",
            type: "number",
            required: true,
          },
          {
            id: "interest_rate",
            label: "წლიური პროცენტი (%)",
            type: "number",
            required: false,
          },
          {
            id: "loan_date",
            label: "გაცემის თარიღი",
            type: "date",
            required: true,
          },
          {
            id: "return_date",
            label: "დაბრუნების თარიღი",
            type: "date",
            required: true,
          },
        ],
      },
    ],
  },

  // Template 8: Leave Request
  {
    id: "shvebuleba-gantskhadeba",
    slug: "shvebuleba-gantskhadeba",
    category: "gantskhadebebi",
    title: "შვებულების განცხადება",
    description: "ანაზღაურებადი ან არანაზღაურებადი შვებულების მოთხოვნა",
    downloads: 4521,
    rating: 4.5,
    formats: ["docx", "pdf"],
    featured: false,
    sections: [
      {
        id: "company",
        title: "კომპანია",
        fields: [
          {
            id: "company_name",
            label: "კომპანიის დასახელება",
            type: "text",
            required: true,
          },
          {
            id: "director_name",
            label: "დირექტორის სახელი",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "employee",
        title: "თანამშრომელი",
        fields: [
          {
            id: "employee_name",
            label: "თქვენი სახელი და გვარი",
            type: "text",
            required: true,
          },
          {
            id: "position",
            label: "თქვენი თანამდებობა",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "leave",
        title: "შვებულების დეტალები",
        fields: [
          {
            id: "leave_type",
            label: "შვებულების ტიპი",
            type: "text",
            required: true,
          },
          {
            id: "start_date",
            label: "დაწყების თარიღი",
            type: "date",
            required: true,
          },
          {
            id: "end_date",
            label: "დასრულების თარიღი",
            type: "date",
            required: true,
          },
          { id: "reason", label: "მიზეზი", type: "text", required: false },
        ],
      },
    ],
  },

  // Template 4: Simple CV
  {
    id: "martivi-cv",
    slug: "martivi-cv",
    category: "cv-reziume",
    title: "მარტივი CV",
    description: "სტანდარტული CV შაბლონი",
    downloads: 15234,
    rating: 4.9,
    formats: ["docx", "pdf"],
    featured: true,
    sections: [
      {
        id: "personal",
        title: "პირადი ინფორმაცია",
        fields: [
          {
            id: "full_name",
            label: "სახელი და გვარი",
            type: "text",
            required: true,
          },
          { id: "email", label: "ელ-ფოსტა", type: "email", required: true },
          { id: "phone", label: "ტელეფონი", type: "text", required: true },
          { id: "address", label: "მისამართი", type: "text", required: false },
        ],
      },
      {
        id: "objective",
        title: "მიზანი",
        fields: [
          {
            id: "position_wanted",
            label: "სასურველი პოზიცია",
            type: "text",
            required: true,
          },
          {
            id: "summary",
            label: "მოკლე აღწერა",
            type: "text",
            required: false,
          },
        ],
      },
      {
        id: "experience",
        title: "გამოცდილება",
        fields: [
          {
            id: "job1_company",
            label: "კომპანია",
            type: "text",
            required: false,
          },
          {
            id: "job1_position",
            label: "პოზიცია",
            type: "text",
            required: false,
          },
          {
            id: "job1_years",
            label: "წლები (მაგ: 2020-2023)",
            type: "text",
            required: false,
          },
        ],
      },
      {
        id: "education",
        title: "განათლება",
        fields: [
          {
            id: "edu_institution",
            label: "სასწავლებელი",
            type: "text",
            required: false,
          },
          {
            id: "edu_degree",
            label: "ხარისხი/სპეციალობა",
            type: "text",
            required: false,
          },
          { id: "edu_years", label: "წლები", type: "text", required: false },
        ],
      },
      {
        id: "skills",
        title: "უნარები",
        fields: [
          {
            id: "skills",
            label: "უნარები (მძიმით გამოყოფილი)",
            type: "text",
            required: false,
          },
          { id: "languages", label: "ენები", type: "text", required: false },
        ],
      },
    ],
  },
];

export function getFeaturedTemplates(): Template[] {
  return templates.filter((t) => t.featured);
}

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}

export function getTemplatesByCategory(categoryId: string): Template[] {
  return templates.filter((t) => t.category === categoryId);
}
