.
├── login ("/" main route)/
│   └── signup ("/signup")
└── Maindashboard (/main route)/
    ├── productlisting/
    │   └── addproduct (folder name - Addproduct)
    ├── Application (live pages)
    ├── profile/
    │   └── internal pages (folder name - profile)
    └── preformance page

## routes

/ - login
/signup - signup
/main - Maindashboard
/productlisting - product listing
/profile - user profile management
/pre - performance metrics
/live - Application page 
/addcategory - start of new product adding
/Chooseoption - choose new/used option page
/suggestion - suggstion on choosed category item after addcategory page (add product)
/adddetails - detail items - add detailed descriptions and specifications for the product
/preview - preview of details of item
/message - seller profile message 
/profile - user profile management (personal info)
/password - change password page
/address - manage shipping and billing addresses
    
  
## Dependencies
    "lucide-react": "^0.487.0",
    "react": "^19.0.0",
    "react-contenteditable": "^3.3.7",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.5.0",
    "react-toastify": "^11.0.5",
    "recharts": "^2.15.1"

## for python JWT auth

pip install Flask Flask-JWT-Extended Flask-SQLAlchemy email-validator bcrypt
pip install python-dotenv
npm install axios

