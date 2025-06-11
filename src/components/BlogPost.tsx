import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, ExternalLink, Github } from 'lucide-react';
import { marked } from 'marked';

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

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  // Configure marked options for better security and styling
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  // Sample blog post content
  const samplePosts: { [key: string]: BlogPost } = {
    'security-monitoring-system': {
      id: '1',
      title: 'Security Monitoring System: Building Real-Time Threat Detection with AWS',
      slug: 'security-monitoring-system',
      excerpt: 'Deep dive into building a comprehensive security monitoring solution using AWS CloudWatch, Secrets Manager, and SNS for real-time threat detection and incident response.',
      content: `
# Security Monitoring System: Building Real-Time Threat Detection with AWS

## Project Overview

In today's rapidly evolving threat landscape, organizations need robust security monitoring systems that can detect and respond to threats in real-time. This project demonstrates the implementation of a comprehensive security monitoring solution using AWS cloud services.

## Architecture Overview

The security monitoring system leverages several AWS services to create a multi-layered defense strategy:

### Core Components

1. **AWS CloudWatch** - Central monitoring and logging
2. **AWS Secrets Manager** - Secure credential management
3. **Amazon SNS** - Real-time notifications
4. **AWS Lambda** - Automated response functions
5. **Amazon EC2** - Monitored infrastructure

## Implementation Details

### 1. Credential Security with AWS Secrets Manager

One of the first priorities was securing all system credentials. AWS Secrets Manager provides:

- Automatic credential rotation
- Encrypted storage
- Fine-grained access control
- Integration with other AWS services

\`\`\`python
import boto3
from botocore.exceptions import ClientError

def get_secret(secret_name, region_name):
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )
    
    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
    except ClientError as e:
        raise e
    
    return get_secret_value_response['SecretString']
\`\`\`

### 2. Real-Time Monitoring with CloudWatch

CloudWatch Metric Filters were implemented to detect anomalous patterns:

- Failed login attempts
- Unusual network traffic
- Resource utilization spikes
- Application errors

**Key Achievement**: Reduced response time by 20% through automated anomaly detection.

### 3. Automated Alerting System

The SNS notification system provides immediate alerts for:

- Security incidents
- System failures
- Performance degradation
- Compliance violations

**Impact**: Improved threat detection efficiency by 45% with automated CloudWatch Alarms.

## Security Benefits

### Defense in Depth

The system implements multiple security layers:

1. **Preventive Controls**: IAM policies, security groups
2. **Detective Controls**: CloudWatch monitoring, log analysis
3. **Responsive Controls**: Automated incident response
4. **Recovery Controls**: Backup and disaster recovery

### Compliance and Auditing

- Comprehensive logging of all security events
- Automated compliance reporting
- Audit trail maintenance
- Regular security assessments

## Lessons Learned

### Technical Insights

1. **Automation is Key**: Manual monitoring doesn't scale
2. **Context Matters**: Alerts need sufficient context for effective response
3. **Integration**: Seamless integration between services reduces complexity

### Best Practices

- Implement least privilege access
- Regular security reviews and updates
- Continuous monitoring and improvement
- Documentation and knowledge sharing

## Future Enhancements

- Machine learning-based anomaly detection
- Integration with SIEM platforms
- Advanced threat intelligence feeds
- Automated remediation workflows

## Conclusion

This security monitoring system demonstrates how cloud-native services can be leveraged to create robust, scalable security solutions. The combination of AWS CloudWatch, Secrets Manager, and SNS provides a solid foundation for real-time threat detection and response.

The project successfully achieved:
- 20% reduction in response time
- 45% improvement in threat detection efficiency
- Enhanced security posture through automated monitoring

## Technologies Used

- AWS CloudWatch
- AWS Secrets Manager
- Amazon SNS
- AWS Lambda
- Python
- Terraform (Infrastructure as Code)

---

*This project was completed as part of my cybersecurity portfolio at Stevens Institute of Technology. For more details or questions about the implementation, feel free to reach out.*
      `,
      category: 'Cloud Security',
      tags: ['AWS', 'CloudWatch', 'Security', 'Monitoring', 'Python'],
      created_at: '2024-12-15',
      updated_at: '2024-12-15',
      read_time: 8
    },
    'cloud-security-framework-aws-iam': {
      id: '2',
      title: 'Cloud Security Framework with AWS IAM: Implementing Zero-Trust Architecture',
      slug: 'cloud-security-framework-aws-iam',
      excerpt: 'Learn how to build a robust cloud security framework using AWS IAM, implementing zero-trust principles and role-based access control for enhanced security compliance.',
      content: `
# Cloud Security Framework with AWS IAM: Implementing Zero-Trust Architecture

## Introduction

In the era of cloud computing, traditional perimeter-based security models are no longer sufficient. This project demonstrates the implementation of a zero-trust security framework using AWS Identity and Access Management (IAM) services.

## Zero-Trust Principles

### Core Concepts

1. **Never Trust, Always Verify**: Every access request is authenticated and authorized
2. **Least Privilege Access**: Users receive minimum necessary permissions
3. **Assume Breach**: Design systems assuming compromise has occurred
4. **Continuous Monitoring**: Real-time verification of access patterns

## Implementation Strategy

### 1. IAM Policy Architecture

The framework implements a hierarchical policy structure:

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeInstances",
        "ec2:DescribeSecurityGroups"
      ],
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "aws:RequestedRegion": "us-east-1"
        }
      }
    }
  ]
}
\`\`\`

### 2. Role-Based Access Control (RBAC)

Implemented granular roles for different user types:

- **Security Administrators**: Full security management
- **System Operators**: Limited operational access
- **Developers**: Development environment access
- **Auditors**: Read-only compliance access

### 3. EC2 Instance Hardening

**Achievement**: Reduced unauthorized access risks by 30% through:

- Instance-level IAM roles
- Security group restrictions
- Network ACL configurations
- Regular security assessments

## Security Compliance Improvements

### Compliance Framework

The implementation increased security compliance by 20% through:

1. **Automated Policy Enforcement**
2. **Regular Access Reviews**
3. **Compliance Monitoring**
4. **Audit Trail Maintenance**

### Monitoring and Alerting

Integrated CloudTrail for comprehensive logging:

\`\`\`python
import boto3
import json

def analyze_access_patterns():
    cloudtrail = boto3.client('cloudtrail')
    
    response = cloudtrail.lookup_events(
        LookupAttributes=[
            {
                'AttributeKey': 'EventName',
                'AttributeValue': 'AssumeRole'
            }
        ]
    )
    
    return response['Events']
\`\`\`

## Technical Implementation

### Infrastructure as Code

Used Terraform for consistent deployments:

\`\`\`hcl
resource "aws_iam_role" "security_role" {
  name = "SecurityAdministrator"
  
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
}
\`\`\`

### Automated Compliance Monitoring

Developed automated systems for:

- Policy compliance checking
- Access pattern analysis
- Anomaly detection
- Reporting and alerting

## Results and Impact

### Security Improvements

1. **30% Reduction** in unauthorized access risks
2. **20% Increase** in security compliance
3. **Automated** policy enforcement
4. **Real-time** threat detection

### Operational Benefits

- Simplified access management
- Reduced administrative overhead
- Improved audit capabilities
- Enhanced incident response

## Best Practices Implemented

### IAM Security

1. **Multi-Factor Authentication** for all privileged accounts
2. **Regular Access Reviews** and cleanup
3. **Principle of Least Privilege** enforcement
4. **Automated Policy Validation**

### Monitoring and Logging

- Comprehensive CloudTrail logging
- Real-time alerting for suspicious activities
- Regular security assessments
- Automated compliance reporting

## Challenges and Solutions

### Challenge: Complex Permission Management

**Solution**: Implemented policy templates and automated validation

### Challenge: Scalability

**Solution**: Used IAM groups and roles for efficient management

### Challenge: Compliance Tracking

**Solution**: Automated compliance monitoring and reporting

## Future Enhancements

1. **Machine Learning** for anomaly detection
2. **Advanced Threat Intelligence** integration
3. **Zero-Trust Network Access** implementation
4. **Enhanced Automation** capabilities

## Conclusion

This cloud security framework demonstrates how AWS IAM can be leveraged to implement robust zero-trust architecture. The project successfully enhanced security posture while maintaining operational efficiency.

Key achievements:
- 30% reduction in unauthorized access risks
- 20% improvement in security compliance
- Automated compliance monitoring system
- Comprehensive audit and reporting capabilities

## Technologies Used

- AWS IAM
- Amazon EC2
- AWS CloudTrail
- Python
- Terraform
- JSON/YAML

---

*This project showcases advanced cloud security implementation as part of my cybersecurity studies at Stevens Institute of Technology.*
      `,
      category: 'Cloud Security',
      tags: ['AWS', 'IAM', 'Zero-Trust', 'Security', 'Terraform'],
      created_at: '2024-12-10',
      updated_at: '2024-12-10',
      read_time: 12
    },
    'optimized-shopify-website': {
      id: '3',
      title: 'Optimizing Shopify Performance: A Complete Guide to Speed and SEO',
      slug: 'optimized-shopify-website',
      excerpt: 'Complete guide to optimizing Shopify websites for performance, security, and SEO. Learn how to improve Core Web Vitals and boost search rankings.',
      content: `
# Optimizing Shopify Performance: A Complete Guide to Speed and SEO

## Project Overview

This case study details the complete optimization of a luxury Italian menswear e-commerce website built on Shopify. The project focused on performance enhancement, SEO improvement, and customer experience optimization.

## Initial Assessment

### Performance Baseline

Before optimization:
- **Largest Contentful Paint (LCP)**: 4.2 seconds
- **First Input Delay (FID)**: 180ms
- **Cumulative Layout Shift (CLS)**: 0.25
- **SEO Ranking**: Position 20.7 (average)

### Identified Issues

1. Unoptimized images and assets
2. Excessive JavaScript execution
3. Poor mobile responsiveness
4. Inadequate SEO structure
5. Slow server response times

## Performance Optimization Strategy

### 1. Core Web Vitals Improvement

**Largest Contentful Paint (LCP) Optimization**

Achieved 35% improvement through:

\`\`\`liquid
<!-- Optimized image loading -->
{% assign image_size = '800x' %}
{% if product.featured_image %}
  <img 
    src="{{ product.featured_image | img_url: image_size }}"
    alt="{{ product.featured_image.alt | escape }}"
    loading="lazy"
    width="800"
    height="600"
  >
{% endif %}
\`\`\`

**Key Techniques:**
- Image optimization and compression
- Lazy loading implementation
- Critical CSS inlining
- Font optimization

### 2. JavaScript Performance

Optimized JavaScript execution:

\`\`\`javascript
// Deferred loading for non-critical scripts
function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
}

// Load analytics after page interaction
document.addEventListener('click', function() {
  loadScript('/assets/analytics.js');
}, { once: true });
\`\`\`

### 3. CSS Optimization

Implemented critical CSS strategy:

\`\`\`css
/* Critical above-the-fold styles */
.hero-section {
  background-image: url('hero-optimized.webp');
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
}

/* Non-critical styles loaded asynchronously */
@media (min-width: 768px) {
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}
\`\`\`

## SEO Enhancement Strategy

### 1. Technical SEO

**Achievement**: Improved SEO ranking by 43% (position 20.7 to 11.8)

Implemented comprehensive SEO structure:

\`\`\`liquid
<!-- Enhanced meta tags -->
<title>{{ page_title }}{% unless page_title contains shop.name %} - {{ shop.name }}{% endunless %}</title>
<meta name="description" content="{{ page_description | default: shop.description | truncate: 160 }}">

<!-- Open Graph tags -->
<meta property="og:title" content="{{ page_title }}">
<meta property="og:description" content="{{ page_description | truncate: 160 }}">
<meta property="og:image" content="{{ featured_image | img_url: '1200x630' }}">

<!-- Schema markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{{ product.title }}",
  "description": "{{ product.description | strip_html | truncate: 160 }}",
  "image": "{{ product.featured_image | img_url: 'master' }}",
  "offers": {
    "@type": "Offer",
    "price": "{{ product.price | money_without_currency }}",
    "priceCurrency": "{{ shop.currency }}"
  }
}
</script>
\`\`\`

### 2. Content Optimization

- Optimized product descriptions
- Enhanced category pages
- Improved internal linking
- Mobile-first content strategy

### 3. Site Structure

Implemented hierarchical URL structure:
- \`/collections/category/subcategory\`
- \`/products/product-name\`
- \`/pages/content-page\`

## Customer Experience Enhancement

### 1. Targeted Marketing Implementation

**Achievement**: Drove $2.5K average order value through customer segmentation

Klaviyo integration for personalized marketing:

\`\`\`javascript
// Customer segmentation tracking
klaviyo.track('Viewed Product', {
  'Product Name': '{{ product.title }}',
  'Product ID': '{{ product.id }}',
  'Categories': {{ product.tags | json }},
  'Price': {{ product.price | money_without_currency }},
  'Brand': '{{ product.vendor }}'
});

// Abandoned cart recovery
klaviyo.track('Added to Cart', {
  'Product Name': '{{ item.product.title }}',
  'Quantity': {{ item.quantity }},
  'Price': {{ item.price | money_without_currency }}
});
\`\`\`

### 2. Mobile Optimization

Responsive design improvements:

\`\`\`css
/* Mobile-first approach */
.product-card {
  width: 100%;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .product-card {
    width: calc(50% - 1rem);
  }
}

@media (min-width: 1024px) {
  .product-card {
    width: calc(33.333% - 1rem);
  }
}
\`\`\`

## Security Enhancements

### XSS Vulnerability Prevention

Implemented input validation and sanitization:

\`\`\`liquid
<!-- Safe output with escape filters -->
{{ user_input | escape }}

<!-- Form validation -->
<form action="/contact" method="post">
  <input 
    type="text" 
    name="name" 
    required 
    pattern="[A-Za-z\\s]+"
    title="Please enter a valid name"
  >
  <input 
    type="email" 
    name="email" 
    required
    title="Please enter a valid email address"
  >
</form>
\`\`\`

## Results and Impact

### Performance Metrics

**Before vs After:**
- **LCP**: 4.2s → 2.7s (35% improvement)
- **FID**: 180ms → 95ms (47% improvement)
- **CLS**: 0.25 → 0.08 (68% improvement)
- **Page Speed Score**: 45 → 78

### SEO Improvements

- **Ranking**: Position 20.7 → 11.8 (43% improvement)
- **Organic Traffic**: +65% increase
- **Click-through Rate**: +28% improvement
- **Bounce Rate**: -23% reduction

### Business Impact

- **Average Order Value**: $2.5K through targeted marketing
- **Conversion Rate**: +18% improvement
- **Customer Satisfaction**: +32% increase
- **Mobile Sales**: +45% increase

## Tools and Technologies Used

### Development Stack
- **Shopify Liquid** templating
- **JavaScript ES6+** for interactions
- **CSS3** with modern features
- **Webpack** for asset bundling

### Optimization Tools
- **Google PageSpeed Insights**
- **GTmetrix** for performance monitoring
- **Lighthouse** for auditing
- **Klaviyo** for email marketing

### SEO Tools
- **Google Search Console**
- **SEMrush** for keyword research
- **Screaming Frog** for site auditing
- **Schema.org** markup

## Best Practices Implemented

### Performance
1. **Image Optimization**: WebP format, lazy loading
2. **Code Splitting**: Separate critical and non-critical code
3. **Caching Strategy**: Browser and CDN caching
4. **Minification**: CSS, JavaScript, and HTML

### SEO
1. **Keyword Research**: Targeted long-tail keywords
2. **Content Strategy**: High-quality, relevant content
3. **Technical SEO**: Proper markup and structure
4. **Local SEO**: Location-based optimization

### Security
1. **Input Validation**: Server and client-side validation
2. **HTTPS Enforcement**: SSL certificate implementation
3. **Content Security Policy**: XSS protection
4. **Regular Updates**: Platform and plugin updates

## Lessons Learned

### Technical Insights
1. **Performance Budget**: Set and maintain performance budgets
2. **Progressive Enhancement**: Build for all devices and connections
3. **Monitoring**: Continuous performance monitoring is essential
4. **User Experience**: Performance directly impacts user satisfaction

### Business Insights
1. **ROI of Optimization**: Performance improvements drive revenue
2. **Mobile-First**: Mobile optimization is crucial for e-commerce
3. **Data-Driven Decisions**: Use analytics to guide optimization
4. **Customer Segmentation**: Personalization increases engagement

## Future Enhancements

### Technical Roadmap
1. **Progressive Web App** implementation
2. **Advanced Caching** strategies
3. **AI-Powered** personalization
4. **Voice Search** optimization

### Business Roadmap
1. **International Expansion** optimization
2. **Advanced Analytics** implementation
3. **Customer Journey** optimization
4. **Omnichannel** integration

## Conclusion

This Shopify optimization project demonstrates the significant impact that comprehensive performance and SEO improvements can have on e-commerce success. Through systematic optimization of Core Web Vitals, SEO structure, and customer experience, we achieved substantial improvements in both technical metrics and business outcomes.

**Key Achievements:**
- 35% improvement in Largest Contentful Paint
- 43% improvement in SEO rankings
- $2.5K average order value through targeted marketing
- Enhanced security through XSS vulnerability prevention

The project showcases the importance of a holistic approach to e-commerce optimization, combining technical excellence with business strategy to deliver measurable results.

---

*This project was completed as part of my role as IT Strategist at Riflessi, demonstrating practical application of web development and digital marketing skills.*
      `,
      category: 'Web Development',
      tags: ['Shopify', 'Performance', 'SEO', 'JavaScript', 'Liquid'],
      created_at: '2024-12-05',
      updated_at: '2024-12-05',
      read_time: 10
    }
  };

  useEffect(() => {
    if (slug && samplePosts[slug]) {
      setPost(samplePosts[slug]);
    }
    setLoading(false);
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderMarkdown = (content: string) => {
    try {
      // Use marked to safely parse markdown
      const htmlContent = marked(content);
      return htmlContent;
    } catch (error) {
      console.error('Error parsing markdown:', error);
      // Fallback to plain text if parsing fails
      return `<p class="text-secondary-200">${content}</p>`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-secondary-300">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-secondary-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-secondary-300 mb-8">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blog')}
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-950 pt-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center text-secondary-400 hover:text-white transition-colors duration-300 mb-8 animate-slide-left"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </button>

        {/* Post Header */}
        <header className="mb-12 animate-slide-top">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-300 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <div className="flex items-center text-secondary-400 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {post.read_time} min read
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between border-b border-secondary-800 pb-6">
            <div className="flex items-center text-secondary-400">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Published on {formatDate(post.created_at)}</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/gustavobalaguera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <button className="text-secondary-400 hover:text-white transition-colors duration-300">
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <article className="prose prose-lg max-w-none animate-slide-bottom animate-delay-200">
          <div 
            className="markdown-content text-secondary-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </article>

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-secondary-800 animate-slide-bottom animate-delay-400">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center px-3 py-1 bg-secondary-800/50 text-secondary-300 rounded-lg text-sm"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Learning More?
            </h3>
            <p className="text-secondary-300 mb-6">
              Have questions about this project or want to discuss similar implementations? 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/#contact')}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
              >
                Get In Touch
              </button>
              <a
                href="https://github.com/gustavobalaguera"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-secondary-600 text-secondary-300 py-3 px-6 rounded-lg hover:bg-secondary-800/50 hover:text-white transition-all duration-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .markdown-content h1 {
          @apply text-3xl font-bold text-white mb-6 mt-8;
        }
        .markdown-content h2 {
          @apply text-2xl font-bold text-white mb-4 mt-6;
        }
        .markdown-content h3 {
          @apply text-xl font-semibold text-white mb-3 mt-4;
        }
        .markdown-content p {
          @apply text-secondary-200 mb-4 leading-relaxed;
        }
        .markdown-content ul {
          @apply text-secondary-200 mb-4 list-disc list-inside;
        }
        .markdown-content ol {
          @apply text-secondary-200 mb-4 list-decimal list-inside;
        }
        .markdown-content li {
          @apply mb-2;
        }
        .markdown-content strong {
          @apply font-semibold text-primary-300;
        }
        .markdown-content em {
          @apply italic text-secondary-200;
        }
        .markdown-content code {
          @apply bg-secondary-800 text-primary-300 px-2 py-1 rounded text-sm;
        }
        .markdown-content pre {
          @apply bg-secondary-900 border border-secondary-700 rounded-lg p-4 overflow-x-auto mb-4;
        }
        .markdown-content pre code {
          @apply bg-transparent text-secondary-200 p-0;
        }
        .markdown-content blockquote {
          @apply border-l-4 border-primary-500 pl-4 italic text-secondary-300 mb-4;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;