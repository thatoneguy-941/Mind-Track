import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MobileNav } from './mobile-nav'; // Changed to default import
import BrainSimple from './BrainSimple'; // Corrected import

const LineChart = () => {
    return (
        <div>
            <h2>Line Chart Component</h2>
            <Link href="/some-path">
                <Button>Go to Some Path</Button>
            </Link>
            <MobileNav />
            <BrainSimple /> {/* Use the imported component directly */}
        </div>
    );
};

export default LineChart;