import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Define the form schema
const websiteFormSchema = z.object({
  // Personal Information
  personalInfo: z.object({
    name: z.string()
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name must not exceed 100 characters'),
    email: z.string()
      .email('Please enter a valid email address'),
    headline: z.string()
      .max(150, 'Headline must not exceed 150 characters')
      .optional(),
  }),

  // Academic Information
  academicInfo: z.object({
    major: z.string()
      .min(2, 'Major must be at least 2 characters'),
    minor: z.string().optional(),
    gpa: z.string()
      .regex(/^\d*\.?\d{0,2}$/, 'GPA must be a number with up to 2 decimal places')
      .transform(Number)
      .refine((val) => val >= 0 && val <= 4.0, 'GPA must be between 0 and 4.0')
      .optional(),
    graduationYear: z.string()
      .regex(/^\d{4}$/, 'Please enter a valid year')
      .transform(Number)
      .refine(
        (val) => val >= 1900 && val <= new Date().getFullYear() + 10,
        'Please enter a valid graduation year'
      ),
  }),

  // Experience & Achievements
  experience: z.array(z.object({
    title: z.string().min(2, 'Title is required'),
    organization: z.string().min(2, 'Organization is required'),
    startDate: z.string().regex(/^\d{4}-\d{2}$/, 'Please enter a valid date (YYYY-MM)'),
    endDate: z.string()
      .regex(/^\d{4}-\d{2}$/, 'Please enter a valid date (YYYY-MM)')
      .or(z.literal('present'))
      .optional(),
    description: z.string().max(500, 'Description must not exceed 500 characters'),
  })).default([]),

  // Additional Information
  additionalInfo: z.object({
    interests: z.string().max(300, 'Interests must not exceed 300 characters').optional(),
    skills: z.array(z.string()).default([]),
    links: z.array(z.object({
      label: z.string(),
      url: z.string().url('Please enter a valid URL'),
    })).default([]),
  }),

  // Custom Sections
  customSections: z.array(z.object({
    title: z.string().min(2, 'Section title is required'),
    content: z.string().min(10, 'Content must be at least 10 characters'),
  })).default([]),
});

type WebsiteFormData = z.infer<typeof websiteFormSchema>;

export default function WebsiteBuilderForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WebsiteFormData>({
    resolver: zodResolver(websiteFormSchema),
    defaultValues: {
      experience: [],
      additionalInfo: {
        skills: [],
        links: [],
      },
      customSections: [],
    },
  });

  const onSubmit = async (data: WebsiteFormData) => {
    try {
      // Log the validated data for now
      console.log('Form data:', data);
      setSubmitStatus('success');
      // Will add actual submission logic later
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal Information */}
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          
          <div className="space-y-2">
            <Input
              {...register('personalInfo.name')}
              placeholder="Full Name"
              className={errors.personalInfo?.name ? 'border-red-500' : ''}
            />
            {errors.personalInfo?.name && (
              <p className="text-red-500 text-sm">{errors.personalInfo.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              {...register('personalInfo.email')}
              type="email"
              placeholder="Email"
              className={errors.personalInfo?.email ? 'border-red-500' : ''}
            />
            {errors.personalInfo?.email && (
              <p className="text-red-500 text-sm">{errors.personalInfo.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              {...register('personalInfo.headline')}
              placeholder="Professional Headline (optional)"
              className={errors.personalInfo?.headline ? 'border-red-500' : ''}
            />
            {errors.personalInfo?.headline && (
              <p className="text-red-500 text-sm">{errors.personalInfo.headline.message}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Academic Information */}
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-semibold mb-4">Academic Information</h2>
          
          <div className="space-y-2">
            <Input
              {...register('academicInfo.major')}
              placeholder="Major"
              className={errors.academicInfo?.major ? 'border-red-500' : ''}
            />
            {errors.academicInfo?.major && (
              <p className="text-red-500 text-sm">{errors.academicInfo.major.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              {...register('academicInfo.minor')}
              placeholder="Minor (optional)"
            />
          </div>

          <div className="space-y-2">
            <Input
              {...register('academicInfo.gpa')}
              placeholder="GPA (optional)"
              className={errors.academicInfo?.gpa ? 'border-red-500' : ''}
            />
            {errors.academicInfo?.gpa && (
              <p className="text-red-500 text-sm">{errors.academicInfo.gpa.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Input
              {...register('academicInfo.graduationYear')}
              placeholder="Graduation Year"
              className={errors.academicInfo?.graduationYear ? 'border-red-500' : ''}
            />
            {errors.academicInfo?.graduationYear && (
              <p className="text-red-500 text-sm">{errors.academicInfo.graduationYear.message}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Form Status Alerts */}
      {submitStatus === 'success' && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription>Form submitted successfully!</AlertDescription>
        </Alert>
      )}
      
      {submitStatus === 'error' && (
        <Alert className="bg-red-50 border-red-200">
          <AlertDescription>An error occurred. Please try again.</AlertDescription>
        </Alert>
      )}

      <div className="flex gap-4">
        <Button type="submit">Save Changes</Button>
        <Button 
          type="button" 
          variant="outline"
          onClick={() => {
            reset();
            setSubmitStatus('idle');
          }}
        >
          Reset Form
        </Button>
      </div>
    </form>
  );
}