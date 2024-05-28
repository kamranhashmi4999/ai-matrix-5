// pages/build/BuildPage.tsx

'use client';

import AppOverview from './steps/AppOverview';
import AIModelDetails from './steps/AIModelDetails';
import AIConversation from './steps/AIConversation';
import BrokerManagement from './steps/BrokerManagement';
import ResponsePresentation from './steps/ResponsePresentation';
import WorkflowConfigurations from './steps/WorkflowConfigurations';
import AdvancedProcessing from './steps/AdvancedProcessing';
import FormStepper from '@/ui/steps/FormStepper';

const BuildPage: React.FC = () => {
    const steps = [
        {
            label: 'Overview',
            description: 'The Basics',
            content: <AppOverview/>,
        },
        {
            label: 'AI Model',
            description: 'Specifications',
            content: <AIModelDetails/>,
        },
        {
            label: 'Prompts',
            description: 'AI Messages',
            content: <AIConversation/>,
        },
        {
            label: 'Brokers',
            description: 'Variables',
            content: <BrokerManagement/>,
        },
        {
            label: 'Presentation',
            description: 'Show Response',
            content: <ResponsePresentation/>,
        },
        {
            label: 'Workflow',
            description: 'Next Steps',
            content: <WorkflowConfigurations/>,
        },
        {
            label: 'Processing',
            description: 'Advanced',
            content: <AdvancedProcessing/>,
        }
    ];

    const handleFormSubmit = () => {
        console.log('Build configuration completed.');
    };

    return (
        <FormStepper
            steps={steps}
            onFormSubmit={handleFormSubmit}
        />
    );
};

export default BuildPage;
