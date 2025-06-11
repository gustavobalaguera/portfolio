import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, FileText, Search, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  read_time: number;
  featured_image?: string;
}

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts for demonstration
  const samplePosts: BlogPost[] = [
    {
      id: '1',
      title: 'Security Monitoring System: Building Real-Time Threat Detection with AWS',
      slug: 'security-monitoring-system',
      excerpt: 'Deep dive into building a comprehensive security monitoring solution using AWS CloudWatch, Secrets Manager, and SNS for real-time threat detection and incident response.',
      content: '',
      category: 'Cloud Security',
      tags: ['AWS', 'CloudWatch', 'Security', 'Monitoring', 'Python'],
      created_at: '2024-12-15',
      updated_at: '2024-12-15',
      read_time: 8
    },
    {
      id: '2',
      title: 'Cloud Security Framework with AWS IAM: Implementing Zero-Trust Architecture',
      slug: 'cloud-security-framework-aws-iam',
      excerpt: 'Learn how to build a robust cloud security framework using AWS IAM, implementing zero-trust principles and role-based access control for enhanced security compliance.',
      content: '',
      category: 'Cloud Security',
      tags: ['AWS', 'IAM', 'Zero-Trust', 'Security', 'Terraform'],
      created_at: '2024-12-10',
      updated_at: '2024-12-10',
      read_time: 12
    },
    {
      id: '3',
      title: 'Optimizing Shopify Performance: A Complete Guide to Speed and SEO',
      slug: 'optimized-shopify-website',
      excerpt: 'Complete guide to optimizing Shopify websites for performance, security, and SEO. Learn how to improve Core Web Vitals and boost search rankings.',
      content: '',
      category: 'Web Development',
      tags: ['Shopify', 'Performance', 'SEO', 'JavaScript', 'Liquid'],
      created_at: '2024-12-05',
      updated_at: '2024-12-05',
      read_time: 10
    },
    {
      id: '4',
      title: 'Cybersecurity Best Practices for Small Businesses',
      slug: 'cybersecurity-best-practices-small-business',
      excerpt: 'Essential cybersecurity practices every small business should implement to protect against common threats and vulnerabilities.',
      content: '',
      category: 'Cybersecurity',
      tags: ['Security', 'Best Practices', 'Small Business', 'Risk Management'],
      created_at: '2024-11-28',
      updated_at: '2024-11-28',
      read_time: 6
    },
    {
      id: '5',
      title: 'Understanding the NIST Cybersecurity Framework',
      slug: 'understanding-nist-cybersecurity-framework',
      excerpt: 'A comprehensive guide to the NIST Cybersecurity Framework and how organizations can implement it to improve their security posture.',
      content: '',
      category: 'Cybersecurity',
      tags: ['NIST', 'Framework', 'Compliance', 'Risk Management'],
      created_at: '2024-11-20',
      updated_at: '2024-11-20',
      read_time: 15
    }
  ];

  useEffect(() => {
    // For now, use sample data. In production, this would fetch from Supabase
    setPosts(samplePosts);
    setLoading(false);
  }, []);

  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-secondary-300">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-950 pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-top">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Blog & Documentation
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Technical insights, project documentation, and cybersecurity knowledge sharing.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-slide-bottom animate-delay-200">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary-800/50 border border-secondary-700/50 rounded-xl text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-secondary-800/50 text-secondary-300 hover:bg-secondary-700/50 hover:text-white'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl overflow-hidden hover:bg-secondary-800/50 hover:border-primary-500/30 transition-all duration-500 cursor-pointer animate-slide-bottom animate-delay-${(index + 3) * 100}`}
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              {/* Post Header */}
              <div className="p-6 border-b border-secondary-700/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-300 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-secondary-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.read_time} min read
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-secondary-300 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Post Footer */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-secondary-400 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(post.created_at)}
                  </div>
                  <ArrowRight className="h-4 w-4 text-secondary-400 group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary-700/50 text-secondary-300 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-secondary-700/50 text-secondary-300 rounded text-xs">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-secondary-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
            <p className="text-secondary-400">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center animate-slide-bottom animate-delay-800">
          <div className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h3>
            <p className="text-secondary-300 mb-8 text-lg leading-relaxed">
              Follow my journey in cybersecurity and web development. New posts are added regularly 
              covering project insights, technical tutorials, and industry best practices.
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-8 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;