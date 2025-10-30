"use client"

import { useState } from "react"
import { SideNav } from "@/components/side-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel } from "@/components/carousel"
import { Code, Search, Filter, Copy, Heart, Share2, ArrowRight } from "lucide-react"
import { ApplicationForm } from "@/components/application-form"

export default function SnippetsPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const languages = ["JavaScript", "Python", "React", "CSS", "SQL", "C++", "Java", "Machine Learning"]
  const categories = ["Algorithms", "UI Components", "Utilities", "Database", "API", "Data Structures", "ML Models"]

  const snippets = [
    {
      id: 1,
      title: "C++ - Quick Sort Algorithm",
      language: "C++",
      category: "Algorithms",
      author: "Prof. Kwame Asante",
      likes: 567,
      code: `#include <iostream>
using namespace std;

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
      description: "Efficient sorting algorithm with O(n log n) average time complexity",
      tags: ["C++", "Sorting", "Divide & Conquer", "O(n log n)"],
    },
    {
      id: 2,
      title: "C++ - Linked List Implementation",
      language: "C++",
      category: "Data Structures",
      author: "Dr. Kwesi Mensah",
      likes: 432,
      code: `struct Node {
    int data;
    Node* next;
    
    Node(int val) : data(val), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;
    
public:
    LinkedList() : head(nullptr) {}
    
    void insert(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next) temp = temp->next;
        temp->next = newNode;
    }
    
    void display() {
        Node* temp = head;
        while (temp) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL\\n";
    }
};`,
      description: "Basic linked list with insert and display operations",
      tags: ["C++", "Data Structures", "Pointers", "Memory Management"],
    },
    {
      id: 3,
      title: "Java - Object-Oriented Programming Basics",
      language: "Java",
      category: "Utilities",
      author: "Ama Frontend",
      likes: 678,
      code: `public class Student {
    private String name;
    private int studentId;
    private double gpa;
    
    // Constructor
    public Student(String name, int id, double gpa) {
        this.name = name;
        this.studentId = id;
        this.gpa = gpa;
    }
    
    // Getters
    public String getName() { return name; }
    public int getStudentId() { return studentId; }
    public double getGPA() { return gpa; }
    
    // Method to check if student is on dean's list
    public boolean isDeansList() {
        return gpa >= 3.5;
    }
    
    @Override
    public String toString() {
        return "Student{" +
            "name='" + name + '\\'' +
            ", id=" + studentId +
            ", gpa=" + gpa + '}';
    }
}`,
      description: "Encapsulation and basic OOP principles in Java",
      tags: ["Java", "OOP", "Encapsulation", "Classes"],
    },
    {
      id: 4,
      title: "Java - ArrayList and Collections",
      language: "Java",
      category: "Data Structures",
      author: "Kofi Dev",
      likes: 523,
      code: `import java.util.*;

public class StudentManager {
    private List<Student> students = new ArrayList<>();
    
    public void addStudent(Student student) {
        students.add(student);
    }
    
    public List<Student> getDeansList() {
        return students.stream()
            .filter(Student::isDeansList)
            .sorted(Comparator.comparingDouble(Student::getGPA).reversed())
            .collect(Collectors.toList());
    }
    
    public void displayAllStudents() {
        students.forEach(System.out::println);
    }
    
    public Student findById(int id) {
        return students.stream()
            .filter(s -> s.getStudentId() == id)
            .findFirst()
            .orElse(null);
    }
}`,
      description: "Working with ArrayList and Stream API for data manipulation",
      tags: ["Java", "Collections", "Streams", "Functional Programming"],
    },
    {
      id: 5,
      title: "Machine Learning - Linear Regression",
      language: "Machine Learning",
      category: "ML Models",
      author: "Dr. Ama Osei",
      likes: 789,
      code: `import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# Sample data: Study hours vs Exam scores
X = np.array([[2], [3], [4], [5], [6], [7], [8], [9]])
y = np.array([50, 55, 65, 70, 75, 85, 90, 95])

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error: {mse:.2f}")
print(f"R² Score: {r2:.2f}")
print(f"Slope: {model.coef_[0]:.2f}")
print(f"Intercept: {model.intercept_:.2f}")`,
      description: "Predict continuous values using linear regression",
      tags: ["ML", "Regression", "Scikit-learn", "Supervised Learning"],
    },
    {
      id: 6,
      title: "Machine Learning - K-Means Clustering",
      language: "Machine Learning",
      category: "ML Models",
      author: "Prof. Kwesi Mensah",
      likes: 645,
      code: `import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Sample data: Student performance metrics
data = np.array([
    [85, 90], [88, 92], [78, 80], [92, 95],
    [45, 50], [48, 52], [42, 48], [50, 55],
    [65, 70], [68, 72], [62, 68], [70, 75]
])

# Standardize the features
scaler = StandardScaler()
data_scaled = scaler.fit_transform(data)

# Apply K-Means clustering
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
clusters = kmeans.fit_predict(data_scaled)

# Print cluster centers
print("Cluster Centers:")
for i, center in enumerate(kmeans.cluster_centers_):
    print(f"Cluster {i}: {center}")

# Visualize clusters
plt.scatter(data[:, 0], data[:, 1], c=clusters, cmap='viridis')
plt.scatter(kmeans.cluster_centers_[:, 0], 
            kmeans.cluster_centers_[:, 1], 
            marker='X', s=200, c='red')
plt.xlabel('Math Score')
plt.ylabel('Science Score')
plt.title('Student Performance Clustering')
plt.show()`,
      description: "Group similar data points using unsupervised learning",
      tags: ["ML", "Clustering", "Unsupervised Learning", "Data Analysis"],
    },
    {
      id: 7,
      title: "Machine Learning - Neural Network Basics",
      language: "Machine Learning",
      category: "ML Models",
      author: "Dr. Ama Osei",
      likes: 834,
      code: `import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np

# Create a simple neural network for classification
model = keras.Sequential([
    layers.Dense(64, activation='relu', input_shape=(10,)),
    layers.Dropout(0.2),
    layers.Dense(32, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(16, activation='relu'),
    layers.Dense(3, activation='softmax')  # 3 classes
])

# Compile the model
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Sample training data
X_train = np.random.randn(100, 10)
y_train = keras.utils.to_categorical(
    np.random.randint(0, 3, 100), 3
)

# Train the model
history = model.fit(
    X_train, y_train,
    epochs=20,
    batch_size=32,
    validation_split=0.2,
    verbose=1
)

# Make predictions
X_test = np.random.randn(10, 10)
predictions = model.predict(X_test)
print("Predictions shape:", predictions.shape)`,
      description: "Build and train a neural network for multi-class classification",
      tags: ["ML", "Deep Learning", "TensorFlow", "Neural Networks"],
    },
    {
      id: 8,
      title: "Debounce Function",
      language: "JavaScript",
      category: "Utilities",
      author: "Kofi Dev",
      likes: 234,
      code: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}`,
      description: "Delay function execution until user stops triggering events",
      tags: ["Performance", "Utilities"],
    },
    {
      id: 9,
      title: "React Custom Hook - useLocalStorage",
      language: "React",
      category: "Utilities",
      author: "Ama Frontend",
      likes: 456,
      code: `function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}`,
      description: "Persist state to localStorage with React hooks",
      tags: ["React", "Hooks", "Storage"],
    },
    {
      id: 10,
      title: "Binary Search Algorithm",
      language: "Python",
      category: "Algorithms",
      author: "Dr. Kwesi Mensah",
      likes: 567,
      code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
      description: "Efficient search algorithm for sorted arrays",
      tags: ["Algorithms", "Search", "O(log n)"],
    },
    {
      id: 11,
      title: "Responsive Grid Layout",
      language: "CSS",
      category: "UI Components",
      author: "Sarah Tech",
      likes: 345,
      code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}`,
      description: "Auto-responsive grid that adapts to screen size",
      tags: ["CSS", "Responsive", "Grid"],
    },
    {
      id: 12,
      title: "SQL Query - Top N Records",
      language: "SQL",
      category: "Database",
      author: "Prof. Kwame Asante",
      likes: 289,
      code: `SELECT 
    student_id,
    name,
    gpa,
    ROW_NUMBER() OVER (ORDER BY gpa DESC) as rank
FROM students
WHERE gpa >= 3.5
LIMIT 10;`,
      description: "Get top 10 students by GPA using window functions",
      tags: ["SQL", "Database", "Window Functions"],
    },
    {
      id: 13,
      title: "Fetch API with Error Handling",
      language: "JavaScript",
      category: "API",
      author: "Dev Community",
      likes: 412,
      code: `async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}`,
      description: "Robust API call with proper error handling",
      tags: ["API", "Async", "Error Handling"],
    },
  ]

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesLanguage = !selectedLanguage || snippet.language === selectedLanguage
    const matchesCategory = !selectedCategory || snippet.category === selectedCategory
    const matchesSearch =
      !searchQuery ||
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesLanguage && matchesCategory && matchesSearch
  })

  const handleCopy = (id: number, code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen">
      <SideNav onApplyClick={() => setShowApplicationForm(true)} />

      <main className="lg:pl-20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl">
              <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm">
                <Code className="h-3 w-3 sm:h-4 sm:w-4 mr-2 inline" />
                Code Snippets
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                Ready-to-Use Code
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
                Browse and copy useful code snippets for algorithms, UI components, utilities, and more. Curated by
                MUISA members.
              </p>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search snippets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 rounded-lg border border-border bg-background text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 sm:py-12 bg-background border-b border-border sticky top-0 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="space-y-4 sm:space-y-0 sm:flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 sm:pb-0">
              <div className="flex items-center gap-2 text-sm font-semibold flex-shrink-0">
                <Filter className="h-4 w-4" />
                Filters:
              </div>

              {/* Language Filter */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedLanguage(null)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                    selectedLanguage === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  All Languages
                </button>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                      selectedLanguage === lang
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                    selectedCategory === null
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Snippets Grid */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            {filteredSnippets.length > 0 ? (
              <>
                <div className="mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredSnippets.length}</span> snippets
                  </p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredSnippets.map((snippet) => (
                    <Card
                      key={snippet.id}
                      className="p-6 hover:shadow-lg transition-all group cursor-pointer flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge className="mb-3 bg-primary text-primary-foreground text-xs">{snippet.language}</Badge>
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                            {snippet.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 flex-1">{snippet.description}</p>

                      {/* Code Block */}
                      <div className="bg-muted rounded-lg p-4 mb-4 overflow-x-auto">
                        <pre className="text-xs sm:text-sm font-mono text-foreground">
                          <code>{snippet.code}</code>
                        </pre>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {snippet.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                            <Heart className="h-4 w-4" />
                            {snippet.likes}
                          </button>
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                            <Share2 className="h-4 w-4" />
                          </button>
                        </div>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                          onClick={() => handleCopy(snippet.id, snippet.code)}
                        >
                          {copiedId === snippet.id ? "Copied!" : "Copy"}
                          <Copy className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Mobile Carousel */}
                <div className="lg:hidden">
                  <Carousel
                    items={filteredSnippets.map((snippet) => (
                      <Card
                        key={snippet.id}
                        className="p-4 sm:p-6 hover:shadow-lg transition-all group cursor-pointer h-full flex flex-col"
                      >
                        <Badge className="mb-2 w-fit bg-primary text-primary-foreground text-xs">
                          {snippet.language}
                        </Badge>

                        <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {snippet.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 flex-1">{snippet.description}</p>

                        {/* Code Block */}
                        <div className="bg-muted rounded-lg p-3 mb-3 overflow-x-auto">
                          <pre className="text-xs font-mono text-foreground line-clamp-4">
                            <code>{snippet.code}</code>
                          </pre>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {snippet.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                              <Heart className="h-3 w-3" />
                              {snippet.likes}
                            </button>
                            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                              <Share2 className="h-3 w-3" />
                            </button>
                          </div>
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                            onClick={() => handleCopy(snippet.id, snippet.code)}
                          >
                            {copiedId === snippet.id ? "Copied!" : "Copy"}
                            <Copy className="ml-2 h-3 w-3" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                    itemsPerView={1}
                    autoPlay={true}
                    autoPlayInterval={6000}
                  />
                </div>
              </>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <Code className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-6 text-balance">
                  No snippets found
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  Try adjusting your filters or search query
                </p>
                <Button
                  onClick={() => {
                    setSelectedLanguage(null)
                    setSelectedCategory(null)
                    setSearchQuery("")
                  }}
                  variant="outline"
                  className="text-sm"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Share Your Code Snippets
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-accent-foreground/90">
              Have useful code snippets? Share them with the MUISA community and help others solve problems faster.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto"
            >
              Submit Snippet <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {showApplicationForm && <ApplicationForm onClose={() => setShowApplicationForm(false)} />}
    </div>
  )
}
