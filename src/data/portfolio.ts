export const profile = {
  name: 'Mohamed Ramadan',
  firstName: 'Mohamed',
  lastName: 'Ramadan',
  roles: [
    'Machine Learning & Data Science Engineer',
    'Machine Learning Engineer',
    'Data Science Engineer',
    'Computer Vision Engineer',
    'Deep Learning Developer',
  ],
  email: 'mohamedramadan01156064645flm@gmail.com',
  phone: '+20 103 681 5365',
  location: 'Cairo, Egypt',
  timezone: 'GMT+2 (EET)',
  github: 'https://github.com/mohamedramadan01156064645flm-commits',
  linkedin: 'https://www.linkedin.com/in/mohamed-ramadan-b8797035a/',
  resume: 'assets/CV.pdf',
  photo: '/me.png',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Internship', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
];

export const aboutHighlights = [
  'End-to-End Machine Learning',
  'Deep Learning & CNNs',
  'Exploratory Data Analysis (EDA)',
  'Computer Vision & Image Classification',
  'Model Evaluation & Data Visualization',
];

export const stats = [
  { icon: '🚀', value: '3', label: 'AI Projects' },
  { icon: '🏢', value: '2', label: 'Internships' },
  { icon: '🎓', value: '2026', label: 'Graduation' },
  { icon: '💻', value: '4', label: 'Programming Languages' },
];

export const marqueeItems = [
  'Python', 'C++', 'Java', 'JavaScript', 'TensorFlow', 'Keras', 'Scikit-learn',
  'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Computer Vision',
  'CNN', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Git', 'GitHub',
];

export const skillCategories = [
  {
    icon: '🧠',
    title: 'Machine Learning & AI',
    tags: ['Supervised Learning', 'Unsupervised Learning', 'Classification', 'Regression', 'Clustering', 'Feature Engineering'],
  },
  {
    icon: '👁️',
    title: 'Deep Learning & Computer Vision',
    tags: ['Deep Learning', 'Neural Networks', 'CNN', 'Computer Vision', 'Image Classification', 'TensorFlow', 'Keras'],
  },
  {
    icon: '📊',
    title: 'Data Science & Analysis',
    tags: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Plotly', 'EDA', 'Statistical Analysis'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Engineering',
    tags: ['Jupyter Notebook', 'Google Colab', 'VS Code', 'Git', 'GitHub', 'Data Structures', 'Algorithms', 'OOP', 'Databases'],
  },
];

export type Project = {
  emoji: string;
  category: 'ml' | 'cv';
  tag: string;
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    emoji: '🧠',
    category: 'cv',
    tag: 'Deep Learning',
    name: "Axon: Alzheimer's Detection",
    description:
      "A custom CNN for classifying brain MRI scans into four Alzheimer's Disease stages. The project covers image preprocessing, model training, evaluation, and a live Gradio deployment on Hugging Face Spaces.",
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'Gradio'],
    github: 'https://github.com/ahmedamr022/Axon-Alzheimers-Detection',
    demo: 'https://huggingface.co/spaces/BoTahex/axon-alzheimer-detection',
  },
  {
    emoji: '💼',
    category: 'ml',
    tag: 'Machine Learning',
    name: '3awatly — AI Job Matching',
    description:
      'A job-matching web application where users upload their CV and receive job offers matched to their resume. Built as a practical AI-assisted hiring workflow with a modern web interface and live deployment.',
    tech: ['Next.js', 'React', 'Google Gemini', 'Supabase'],
    github: 'https://github.com/mohamedramadan01156064645flm-commits/3watly-app',
    demo: 'https://3watly-app.vercel.app/',
  },
  {
    emoji: '🍔',
    category: 'cv',
    tag: 'Computer Vision',
    name: 'Food Image Classifier',
    description:
      'A deep learning web app that classifies food images across 101 Food-101 categories and estimates calories. The model uses a fine-tuned ResNet50 and is deployed as an interactive Hugging Face application.',
    tech: ['PyTorch', 'ResNet50', 'Food-101', 'Hugging Face'],
    github: 'https://github.com/ahmedamr022/Food-Classification',
    demo: 'https://huggingface.co/spaces/BoTahex/food-image-classifier',
  },
];

export const internships = [
  {
    title: 'AI Intern',
    company: 'IT Gate, Cairo, Egypt',
    date: 'June 2025 — September 2025',
    description:
      'Gained practical experience in Artificial Intelligence and Machine Learning concepts and workflows. Worked with Python for data processing and machine learning tasks, applying data preprocessing, model training, and model evaluation techniques while developing a practical understanding of Machine Learning and Deep Learning methodologies.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Python', 'Data Preprocessing', 'Model Training', 'Model Evaluation'],
  },
  {
    title: 'Data Analysis Intern',
    company: 'Cairo, Egypt',
    date: 'July 2023 — September 2023',
    description:
      'Gained hands-on experience in Data Analysis and working with structured datasets. Applied data cleaning, preprocessing, and exploratory data analysis (EDA) techniques using Python and data analysis libraries, with a focus on data visualization and extracting insights from datasets.',
    tags: ['Data Analysis', 'Python', 'Data Cleaning', 'EDA', 'Data Visualization'],
  },
];

export const terminalLines: Array<Array<{ c?: string; t: string }>> = [
  [{ c: 'c-cm', t: '# mohamed_toolkit.py' }],
  [],
  [{ c: 'c-cm', t: '# Deep Learning & Computer Vision' }],
  [{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'tensorflow ' }, { c: 'c-kw', t: 'as ' }, { c: 'c-var', t: 'tf' }],
  [{ c: 'c-kw', t: 'from ' }, { c: 'c-mod', t: 'tensorflow.keras ' }, { c: 'c-kw', t: 'import ' }, { c: 'c-fn', t: 'models' }],
  [{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'cv2' }],
  [],
  [{ c: 'c-cm', t: '# ML & Data Analysis' }],
  [{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'numpy ' }, { c: 'c-kw', t: 'as ' }, { c: 'c-var', t: 'np' }],
  [{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'pandas ' }, { c: 'c-kw', t: 'as ' }, { c: 'c-var', t: 'pd' }],
  [{ c: 'c-kw', t: 'from ' }, { c: 'c-mod', t: 'sklearn ' }, { c: 'c-kw', t: 'import ' }, { c: 'c-fn', t: 'model_selection' }],
  [{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'matplotlib.pyplot ' }, { c: 'c-kw', t: 'as ' }, { c: 'c-var', t: 'plt' }],
  [],
  [{ c: 'c-cm', t: '# Analysis & Evaluation' }],
  [{ c: 'c-kw', t: 'from ' }, { c: 'c-mod', t: 'sklearn.metrics ' }, { c: 'c-kw', t: 'import ' }, { c: 'c-fn', t: 'classification_report' }],
  [{ c: 'c-kw', t: 'print' }, { c: 'c-var', t: '(' }, { c: 'c-str', t: '"All modules loaded successfully."' }, { c: 'c-var', t: ')' }],
];
