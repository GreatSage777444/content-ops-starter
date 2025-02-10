import React from 'react';
import { Heart, BookOpen, Users, Calendar, Star, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80"
            alt="Happy children playing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-purple-400/80" />
        </div>
        <nav className="relative z-10 px-8 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="w-8 h-8 text-white" />
                <span className="text-2xl font-bold text-white">Miraculous Preschool</span>
              </div>
              <div className="flex space-x-8 text-white">
                <a href="#about" className="hover:text-purple-200 transition">About</a>
                <a href="#programs" className="hover:text-purple-200 transition">Programs</a>
                <a href="#schedule" className="hover:text-purple-200 transition">Schedule</a>
                <a href="#contact" className="hover:text-purple-200 transition">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="relative z-10 max-w-4xl mx-auto text-center pt-32">
          <h1 className="text-5xl font-bold text-white mb-6">Where Little Miracles Happen Every Day</h1>
          <p className="text-xl text-white mb-8">Nurturing young minds in a safe, loving, and creative environment</p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
            Enroll Now
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Early Learning</h3>
            <p className="text-gray-600">Comprehensive curriculum designed for young minds</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Teachers</h3>
            <p className="text-gray-600">Dedicated staff with years of experience</p>
          </div>
          <div className="text-center">
            <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
            <p className="text-gray-600">Secure and nurturing space for growth</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80"
                alt="Toddler program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Toddler Program (2-3 years)</h3>
                <p className="text-gray-600">A nurturing environment for our youngest learners to explore and grow.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544749141-8d7fc0c39a18?auto=format&fit=crop&q=80"
                alt="Preschool program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Preschool Program (3-5 years)</h3>
                <p className="text-gray-600">Structured learning with emphasis on social and academic development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Daily Schedule</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Calendar className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Morning Session (8:00 AM - 12:00 PM)</h3>
                <p className="text-gray-600">Learning activities, outdoor play, and creative time</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Afternoon Session (1:00 PM - 5:00 PM)</h3>
                <p className="text-gray-600">Rest time, structured activities, and free play</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-600" />
                <span>info@miraculous-preschool.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-600" />
                <span>123 Rainbow Lane, Sunshine City</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              ></textarea>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6" />
                <span className="text-xl font-bold">Miraculous Preschool</span>
              </div>
              <p className="text-gray-400">Where every child's potential shines bright.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white">About</a>
                <a href="#programs" className="block text-gray-400 hover:text-white">Programs</a>
                <a href="#schedule" className="block text-gray-400 hover:text-white">Schedule</a>
                <a href="#contact" className="block text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Miraculous Preschool. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;