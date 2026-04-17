## Home Page
![screenshot project](https://github.com/yash1880/Data-Table/blob/31bd2e583da54f09a3ef007d81629b2e5f7f1a5f/Screenshot%202026-04-17%20155830.png)
## BookDetail Page
![screenshot project](https://github.com/yash1880/Data-Table/blob/e1e68651b5c78ff78e3000daa085bace83abb787/Screenshot%202026-04-17%20155849.png)
## AddBook Page
![screenshot project](https://github.com/yash1880/Data-Table/blob/bafe5d5c572d1cdcbd9366f067f920c1e30febfc/Screenshot%202026-04-17%20155901.png)
## Viewbook page
![screenshot project]()
# Book Data Table

A React-based web application for managing a collection of books. This app allows users to view, add, edit, and delete books with details like name, author, writer, price, description, and image. Data is stored locally in the browser using localStorage.

## Features

- **View Books**: Browse all books in a table format on the home page
- **Add New Books**: Add new books with comprehensive details
- **Edit Books**: Update existing book information
- **View Book Details**: See detailed information for each book
- **Delete Books**: Remove books from the collection
- **Local Storage**: Data persists between browser sessions
- **Responsive Design**: Built with Bootstrap for mobile-friendly interface
- **Routing**: Smooth navigation between pages using React Router

## Technologies Used

- **React**: Frontend framework for building the user interface
- **Vite**: Fast build tool and development server
- **React Router DOM**: For client-side routing
- **Bootstrap**: CSS framework for responsive design
- **React Bootstrap**: Bootstrap components for React
- **LocalStorage**: For client-side data persistence

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/data-table.git
   cd data-table
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation component
├── pages/
│   ├── Home.jsx            # Main page displaying books table
│   ├── AddBook.jsx         # Form to add new books
│   ├── ViewBook.jsx        # Page to view all books
│   └── BookDetail.jsx      # Detailed view of a single book
├── App.jsx                 # Main app component with routing
├── main.jsx                # App entry point
└── index.css               # Global styles
```

## Usage

1. **Home Page**: View all books in a table format
2. **Add Book**: Click "Add Book" to create a new book entry
3. **Edit Book**: Click the edit button on any book row to modify its details
4. **View Details**: Click on a book name or "View" button to see full details
5. **Delete Book**: Click the delete button to remove a book from the collection

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Bootstrap](https://getbootstrap.com/)
- Icons and components from [React Bootstrap](https://react-bootstrap.github.io/)
