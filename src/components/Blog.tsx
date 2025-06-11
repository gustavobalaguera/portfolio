import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, FileText, Search, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      content: `
# Build a Security Monitoring System

**Author:** Gustavo Balaguera  
**Email:** gustavobalaguera214@gmail.com

---

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-monitoring_reghtjy)

---

## Introducing Today's Project!

In this project, I will demonstrate how to build a powerful monitoring system using AWS to strengthen security and protect sensitive data. I'm doing this project to learn how to track and respond to access events effectively—an essential skill for roles like Security Engineer, DevOps Engineer, and Systems or Cloud Administrator.
Through this project, I will:
   - Set up AWS CloudTrail to monitor secret access events.
   - Use AWS CloudWatch to log access attempts and trigger notifications.
   - Create SNS alerts to receive notifications when secrets are accessed.
   - Build and compare a second notification system to evaluate security effectiveness.
By the end, I will gain hands-on experience in securing cloud environments and designing real-time security alert systems. 


### Tools and concepts

Services I used were AWS Secrets Manager, CloudTrail, CloudWatch Logs, CloudWatch Alarms, and Amazon SNS to build a security monitoring system.

Key concepts I learned include secure secret storage, event tracking, automated alerts, and troubleshooting cloud-based monitoring setups. I gained hands-on experience in detecting unauthorized secret access, refining alarm settings, and integrating notification systems to enhance cloud security. This project demonstrated how AWS services work together to protect sensitive data and provide real-time security insights.

### Project reflection

This project took me about 2 hours to complete.

---

## Create a Secret

Secrets Manager is a secure AWS service designed to store and manage sensitive information, such as passwords, API keys, and credentials. It provides automatic encryption and secret rotation, ensuring that confidential data remains protected without manual updates.

You could use Secrets Manager to securely store database credentials, API keys, and other sensitive information, reducing the risk of exposure. Instead of hardcoding secrets into your applications or sharing them through unsecured channels, Secrets Manager centralizes secret storage and controls access through AWS IAM policies.

To set up for my project, I created a secret called TopSecretInfo that contains a key-value pair. The key is "The Secret is", and the value is “rice is the best carb”. This secret is stored in AWS Secrets Manager, ensuring it remains secure and accessible for monitoring.

By using Secrets Manager, I can manage sensitive data efficiently while leveraging AWS security features like encryption and controlled access policies. This setup will serve as the foundation for tracking access attempts and enhancing cloud security. 

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-monitoring_o5p6q7r8)

---

## Set Up CloudTrail

CloudTrail is a monitoring service that records activity across your AWS account, capturing details like who performed an action, when it happened, and where it originated. It provides valuable insights for security, troubleshooting, and compliance, helping detect unusual behavior, track changes, and maintain regulatory standards.

I set up a trail to record and store account activity, ensuring that interactions are logged securely. By configuring CloudTrail to track access to Secrets Manager, I can identify unauthorized actions, investigate incidents, and strengthen security monitoring. This setup forms a critical part of my AWS security strategy. Time to configure it!

CloudTrail events include Management, Data, Insights, and Network activity events, each tracking different AWS activities.
   - Management events log administrative actions, such as accessing secrets or modifying IAM policies.
   - Data events capture interactions with resources, like uploading files to S3.
   - Insights events detect unusual patterns in account activity.
   - Network activity events track changes in VPC configurations and traffic.

These logs help with security, auditing, and compliance, ensuring visibility into important AWS operations.

### Read vs Write Activity

Read API activity involves viewing information without making changes, such as listing S3 buckets or describing EC2 instances. Write API activity involves modifying or retrieving sensitive data, including creating, deleting, or accessing a secret’s value.

For this project, we need both Read and Write API activity enabled to track secret access effectively. Read will log metadata views, while Write ensures retrieval of the secret value is recorded for security monitoring. This distinction helps detect unauthorized access attempts and strengthens cloud security.

---

## Verifying CloudTrail

I retrieved the secret in two ways:
   - First, through AWS Secrets Manager console, where I navigated to my TopSecretInfo secret and selected Retrieve secret value to view its content.
   - Second, using AWS CLI via CloudShell, where I ran the get-secret-value command to fetch the secret’s value in JSON format.

By testing both methods, I ensured CloudTrail logs these access events, strengthening my ability to track and monitor secret usage. 


To analyze my CloudTrail events, I visited the Event history page in the CloudTrail console and filtered by Event source: secretsmanager.amazonaws.com. I found GetSecretValue events, confirming that CloudTrail successfully logged the retrieval of my secret.

This tells me that my monitoring system is working as expected, capturing access attempts and ensuring I can track who accessed sensitive data. With this visibility, I can detect unauthorized access and strengthen my cloud security strategy!


![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-monitoring_s8t9u0v1)

---

## CloudWatch Metrics

CloudWatch Logs is an AWS service that collects, stores, and analyzes log data from various AWS resources, including CloudTrail. It's important for monitoring because it provides visibility into system activity, helps troubleshoot issues, and enables real-time alerts for critical security events like secret access.

By integrating CloudTrail logs into CloudWatch Logs, I can track who accessed my secret, detect anomalies, and trigger automated responses when suspicious activity occurs. This setup strengthens security by ensuring I can respond swiftly to potential threats.

CloudTrail's Event History is useful for quick investigations of recent events, providing a record of management actions over the past 90 days.

While CloudWatch Logs are better for long-term storage and advanced monitoring, allowing custom alerts, automated responses, and powerful filtering to focus on critical security events. By storing logs in CloudWatch, I can track secret access over time and proactively detect suspicious activity.

A CloudWatch metric is a measurement used to track specific patterns in log data.

When setting up a metric, the metric value represents the action being tracked—in this case, a secret access event. We set it to 1 so that each time someone retrieves the secret, the counter increases.

Default value is used when no matching events occur in a given period. Setting it to 0 ensures we capture both active and inactive periods, providing a complete view of secret access trends. This helps with security monitoring and alerting. 

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-monitoring_a9b0c1d2)

---

## CloudWatch Alarm

A CloudWatch alarm is a monitoring tool that triggers notifications based on metric thresholds.

I set my CloudWatch alarm threshold to Greater/Equal to 1 so the alarm will trigger when my SecretIsAccessed metric detects at least one secret access attempt within a 5-minute period.

This ensures I receive instant alerts whenever my secret is retrieved, helping me track access events and respond quickly to potential security threats. 

I created an SNS topic along the way. An SNS topic is a messaging channel that allows AWS services to send notifications to multiple subscribers at once. Instead of sending individual alerts, it distributes messages efficiently to email addresses, SMS numbers, or even applications.

My SNS topic is set up to send an email notification whenever CloudWatch detects that my secret is accessed. This ensures I receive an alert the moment a sensitive event occurs, helping me respond quickly to potential security threats.

AWS requires email confirmation because it ensures that only the intended recipient subscribes to SNS notifications and prevents unauthorized subscriptions.

This helps prevent spam, accidental subscriptions, and security risks, making sure that alerts are sent only to verified users. By confirming my email, I ensure that I receive important notifications about secret access events without unwanted interruptions. 

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-monitoring_fsdghstt)

---

## Troubleshooting Notification Errors

To test my monitoring system, I retrieved the secret value again in AWS Secrets Manager, expecting the CloudWatch alarm to trigger and send an SNS email notification.

The results were unexpected—no email was received, meaning the alarm or SNS setup needs troubleshooting. I’ll check the CloudWatch alarm status, SNS subscription confirmation, and CloudTrail logs to ensure everything is correctly configured. Once resolved, my monitoring system will successfully alert me whenever the secret is accessed. 

To test my monitoring system, I successfully set up CloudTrail, CloudWatch Logs, and SNS but noticed the CloudWatch alarm wasn’t triggering notifications as expected.

I manually triggered the alarm using the AWS CloudShell command to set its state to ALARM, but no email arrived. This confirmed that the issue wasn’t with CloudTrail or SNS itself, but rather with how the alarm was being evaluated.

To troubleshoot, I verified the alarm’s state, ensured my SNS subscription was confirmed, checked the exact alarm name in my command, and waited for possible delays.

Finally, I adjusted the CloudWatch alarm settings by changing Statistic from Average to Sum, ensuring secret access events were counted correctly. I also reduced the Period from 5 minutes to 1 minute for faster notifications. With these updates, my monitoring system should now trigger email alerts reliably!

I initially didn't receive an email before because my CloudWatch alarm was not evaluating secret access events correctly. The alarm was set to use Average instead of Sum, meaning secret access events weren’t crossing the threshold for triggering notifications.

The key solution was changing the alarm’s Statistic setting to Sum so every secret access counted properly. Additionally, reducing the Period from 5 minutes to 1 minute ensured faster detection and notification delivery.

---

## Success!

To validate that my monitoring system works, I retrieved the secret value again in AWS Secrets Manager, triggering an event that CloudTrail recorded.

I checked the CloudWatch console and confirmed that my Secret is accessed alarm entered the In alarm state, verifying that the metric filter correctly detected the access.

I received an email notification from AWS SNS with the subject "ALARM: SecretIsAccessedAlarm", confirming that the monitoring system successfully alerted me to the secret access event. 

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-monitoring_ageraergearge)

---

*This project was possible thanks to the amazing people at Nextwork. For more details or questions about the implementation, feel free to check them out!*
      `,
      category: 'Cloud Security',
      tags: ['AWS', 'CloudWatch', 'Security', 'Monitoring', 'Python'],
      created_at: '2025-06-10',
      updated_at: '2025-06-10',
      read_time: 8
    },
    {
      id: '2',
      title: 'Cloud Security Framework with AWS IAM',
      slug: 'cloud-security-framework-aws-iam',
      excerpt: 'Learn how to build a robust cloud security framework using AWS IAM, implementing role-based access control for enhanced security compliance.',
      content: `
# Cloud Security with AWS IAM

**Author:** Gustavo Balaguera  
**Email:** gustavobalaguera214@gmail.com

---

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-iam_1c864649)

---

## Introducing Today's Project!

In this project, I will demonstrate how to set up and manage AWS cloud resources using Identity and Access Management (IAM) for authentication and authorization. Specifically, I will:
   - Launch an EC2 instance, a virtual machine running in the AWS cloud.
   - Create IAM policies to define access permissions.
   - Set up IAM users and user groups to control resource access.
   - Assign an AWS account alias for better account personalization.

I'm doing this project because it provides hands-on experience with AWS fundamentals and strengthens my cloud security skills. By working through this challenge, I will gain a deeper understanding of IAM principles, improve my ability to manage cloud resources effectively, and build a strong foundation for future AWS projects.


### Tools and concepts

This project was packed with essential AWS IAM and EC2 concepts. Here are the key takeaways:

1. AWS IAM (Identity and Access Management) – Controlled user authentication and permissions.
 
2. IAM Policies – Defined access rules using JSON-based permission structures.
 
3. IAM User Groups – Managed permissions efficiently by grouping users.
 
4. IAM Users – Created individual user identities for secure AWS access.
 
5. AWS Account Alias – Simplified login URLs for user-friendly access.
 
6. Amazon EC2 Instances – Launched and managed cloud-based virtual machines.
 
7. Environment Tagging – Used tags (Env: production and Env: development) to structure resources.
 
8. Access Testing – Verified IAM policies by attempting actions on restricted and allowed instances.

By applying these concepts, I successfully secured user access, organized cloud resources, and validated IAM policy enforcement. 

### Project reflection

This project took me approximately 90 mins.

---

## Tags

Tags are metadata labels that help organize and manage AWS resources efficiently. They allow users to categorize instances based on attributes like environment, project, owner, or purpose.

In this project, tags serve multiple key functions:
   - Resource identification: Tags make it easier to filter and locate specific instances, especially in large-scale deployments.
   - Cost allocation: By tagging resources, AWS users can track expenses associated with different projects or departments.
   - Access control and policies: Tags help enforce security rules by defining permissions based on environment types (e.g., production vs. development).

By tagging our EC2 instances with Env: production and Env: development, we're ensuring structured organization for effective management and policy enforcement.

For my two EC2 instances, I’ve assigned the following tags:

1. Production Environment Instance
   Name: nextwork-prod-Gustavo
   Key: Env
   Value: production
2. Development Environment Instance
   Name: nextwork-dev-Gustavo
   Key: Env
   Value: development

These tags help organize and differentiate my instances based on their role in the system. The Env tag allows easy filtering, cost tracking, and policy enforcement based on whether the instance is used in production or development.

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-iam_2e0e5a5d)

---

## IAM Policies

IAM policies define permissions for AWS users, groups, or roles by specifying who can perform actions on which resources and under what conditions. These policies ensure secure access control by allowing or denying specific operations, such as starting or stopping an EC2 instance.

Using IAM policies, I can:
   - Grant least privilege access: Ensure users only have permissions necessary for their role.
   - Restrict sensitive actions: Prevent unintended changes to critical resources.
   - Automate security enforcement: Apply policies dynamically to maintain governance.

### The policy I set up

I set up the policy using JSON. The JSON method provides more granular control over permissions, allowing me to precisely define actions, resources, and conditions in a structured format. This ensures that the intern has access only to the development EC2 instance while maintaining security for the production environment.

The effect of my policy is to control access to EC2 instances based on their environment tag. Specifically, it: 
   1. Allows all actions (ec2:*) on EC2 instances only if they have the tag "Env = development". This ensures the intern can manage development instances but not production ones. 
   2. Allows all ec2:Describe* actions across all instances, meaning the intern can view details of instances without modifying them. 
   3. Denies ec2:DeleteTags and ec2:CreateTags actions across all instances. This prevents the intern from modifying resource tags, which helps maintain environment integrity.

By enforcing these rules, I ensure that the intern has sufficient access to perform their development tasks while protecting the production environment from unintended changes.


### When creating a JSON policy, you have to define its Effect, Action and Resource.

In a JSON IAM policy, these three elements define who can do what to which AWS resources:

1. Effect – Determines whether the policy allows or denies an action.
   - "Effect": "Allow" → Grants permission to perform the specified actions.
   - "Effect": "Deny" → Explicitly blocks the actions, even if another policy allows them.

2. Action – Specifies which AWS operations the policy controls.
   - "Action": "ec2:*" → Grants access to all EC2 actions (e.g., start, stop, modify).
   - "Action": "ec2:Describe*" → Grants access only to read-related EC2 actions (e.g., view details).

3. Resource – Defines which AWS resources the policy applies to.
   - "Resource": "*" → Applies the policy to all EC2 instances.
   - "Resource": "arn:aws:ec2:region:account-id:instance/instance-id" → Limits access to a specific EC2 instance.

These elements together ensure security and proper access control in AWS.


---

## My JSON Policy

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-iam_1c864649)

---

## Account Alias

An Account Alias is a user-friendly name that replaces the default AWS account ID in the sign-in URL. Instead of using a long string of numbers, the alias makes it easier for users to access and remember the login page.

By setting the alias to nextwork-alias-gustavo-balaguera, I am ensuring that the account sign-in URL is more intuitive, making onboarding smoother while maintaining security.

Creating an account alias took me no more than 30 seconds. Now, my new AWS console sign-in URL is https://nextwork-alias-gustavo-balaguera.signin.aws.amazon.com/console

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-iam_0eb4439b)

---

## IAM Users and User Groups

### Users

IAM users are individual identities in AWS that represent specific people or applications needing access to resources. Each IAM user has unique credentials (such as a username and password) that allow them to sign in to the AWS Management Console or interact with AWS services through other methods like APIs and CLI.

By creating an IAM user, I ensure that: 
   1. The new intern has personalized access without using shared credentials.
   2. Permissions can be strictly controlled based on the IAM policies attached to their user or group.
   3. Access is traceable, helping with security monitoring and audits.

Since I added the intern to nextwork-dev-group, they automatically inherit its permissions, ensuring they can work within the development environment without affecting production resources.

### User Groups

IAM user groups are collections of IAM users that simplify permission management. Instead of assigning permissions to individual users, you can attach policies to the entire group, ensuring consistency across multiple users.

By using user groups, I can:
  - Efficiently manage permissions for multiple users at once.
   - Ensure consistency in access control across similar roles.
   - Simplify onboarding for new users like NextWork interns.

In this case, I created nextwork-dev-group and attached the NextWorkDevEnvironmentPolicy to it. Now, any intern added to this group will automatically have access to the development environment while remaining restricted from production resources.

Attaching NextWorkDevEnvironmentPolicy to nextwork-dev-group ensures that every IAM user added to this group automatically inherits the defined permissions.
This means: 
   1. Interns gain access to the development EC2 instance but remain restricted from production resources.
   2. Simplified management: Instead of assigning permissions individually, all interns in the group receive the same controlled access.
   3. Future-proofing:  If new interns join, they can be added to the group without needing manual policy adjustments.

This setup enforces security best practices while making access control efficient.


---

## Logging in as an IAM User

There are two main ways to share a new IAM user's sign-in details securely:

1. Download the credentials file – After creating the user, AWS provides an option to download a CSV file containing their login details. This file includes the username, password, and sign-in link. You can securely send this file to the user through an encrypted email or a secure internal communication platform.

2. Manually share credentials – You can provide the sign-in URL, username, and temporary password directly to the user through a secure channel, like a password manager or a company-approved encrypted messaging tool. This method allows more direct control over communication.

Regardless of the method, it’s crucial to ensure secure handling of credentials to prevent unauthorized access.

As I logged in as the dev user, I observed several Access Denied notifications across various AWS console panels. This indicates that the IAM policy I set up is working correctly and is restricting access to unauthorized resources while allowing interaction with permitted ones.

Key observations: 
   1. Limited access to production instances – The policy correctly prevents the dev user from modifying or viewing the production environment.

    2. Ability to interact with development instances – The user should be able to start, stop, and manage EC2 instances tagged with "Env = development".

    3. Restricted actions – Actions like modifying tags or deleting resources are blocked, ensuring security and preventing accidental changes.

This confirms that the intern will have controlled access to AWS resources without compromising sensitive infrastructure.

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-iam_6f2ab446)

---

## Testing IAM Policies

On my two EC2 instances, I performed the following actions:

1. Production Instance: Attempted to stop the instance, but received an "Access Denied" error because my IAM policy prevents modifications to production-tagged resources.
2. Development Instance: Successfully stopped the instance, as my IAM policy allows full control over resources tagged with "Env = development".

This confirms that the IAM policy is correctly enforcing access control, ensuring the intern can work within the development environment while keeping production secure.

### Stopping the production instance

When I tried to stop the production instance, an "Access Denied" banner appeared at the top of the page, preventing me from completing the action. This happened because my IAM policy explicitly restricts the intern’s permissions to instances tagged with "Env = production" while allowing full access only to instances labeled "Env = development".

This confirms that the IAM policy is working as intended, ensuring that interns cannot modify production resources, protecting the integrity of the live environment. The intern can still manage the development instance for testing purposes without impacting operational systems.

![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-iam_0e7a9d6a)

---

## Testing IAM Policies

### Stopping the development instance

When I attempted to stop the development instance, the action was successful because my IAM policy allows full access to instances tagged with "Env = development". Unlike the production instance, which triggered an "Access Denied" error, this instance was correctly configured for the intern's permissions, enabling them to manage it as intended.

This confirms that the IAM setup is working properly, ensuring controlled access while maintaining security.


![Image](http://learn.nextwork.org/authentic_brown_happy_nectarine/uploads/aws-security-iam_1811801c)

---

This project was possible thanks to the amazing people at Nextwork. For more details or questions about the implementation, feel free to check them out!
      `,
      category: 'Cloud Security',
      tags: ['AWS', 'IAM', 'Security'],
      created_at: '2025-06-11',
      updated_at: '2025-06-11',
      read_time: 8
    },
  ];

  useEffect(() => {
    // Use sample data for static site
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
              Blogs & Documentations
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