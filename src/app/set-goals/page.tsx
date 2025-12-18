'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { getItem, setItem } from '../../utils/localStorage';

interface GroupMember {
  name: string;
  saved: number;
}

export default function SetGoals() {
  const [savingFor, setSavingFor] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [monthlySavings, setMonthlySavings] = useState('');
  const [isGroupSaving, setIsGroupSaving] = useState(false);
  const [groupSize, setGroupSize] = useState('');
  const [groupMembers, setGroupMembers] = useState<GroupMember[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedGoal = getItem('savingsGoal');
    if (savedGoal) {
      setSavingFor(savedGoal.savingFor || '');
      setGoalAmount(savedGoal.goalAmount || '');
      setMonthlySavings(savedGoal.monthlySavings || '');
      setIsGroupSaving(savedGoal.isGroupSaving || false);
      setGroupSize(savedGoal.groupSize || '');
    }
  }, []);

  useEffect(() => {
    if (isGroupSaving && groupSize) {
      const size = parseInt(groupSize);
      setGroupMembers(prev => {
        const newMembers = [...prev];
        while (newMembers.length < size) {
          newMembers.push({ name: '', saved: 0 });
        }
        while (newMembers.length > size) {
          newMembers.pop();
        }
        return newMembers;
      });
    }
  }, [groupSize, isGroupSaving]);

  const handleMemberNameChange = (index: number, name: string) => {
    setGroupMembers(prev => {
      const newMembers = [...prev];
      newMembers[index] = { ...newMembers[index], name };
      return newMembers;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isGroupSaving && groupMembers.some(member => !member.name.trim())) {
      alert('Please enter names for all group members');
      return;
    }

    if (savingFor && goalAmount && monthlySavings) {
      const savingsGoal = {
        savingFor,
        goalAmount,
        monthlySavings,
        isGroupSaving,
        groupSize: isGroupSaving ? groupSize : '',
      };
      setItem('savingsGoal', savingsGoal);
      
      if (isGroupSaving) {
        setItem('groupMembers', groupMembers);
      }
      
      router.push('/dashboard');
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-6">
        Set Your Savings Goals
      </h1>
        <Card className="bg-gray-50 border border-gray-200 shadow-sm">
        <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-primary">
            Your Financial Journey Starts Here
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="savingFor" className="text-muted-foreground">
                What are you saving for?
              </Label>
              <Input
                id="savingFor"
                type="text"
                placeholder="Enter your savings goal (e.g., Home, Vacation)"
                value={savingFor}
                onChange={(e) => setSavingFor(e.target.value)}
                className="border focus:border-primary"
                required
              />
            </div>
            <div>
              <Label htmlFor="goalAmount" className="text-muted-foreground">
                How much do you want to save? (₹)
              </Label>
              <Input
                id="goalAmount"
                type="number"
                placeholder="Enter amount in rupees"
                value={goalAmount}
                onChange={(e) => setGoalAmount(e.target.value)}
                className="border focus:border-primary"
                required
              />
            </div>
            <div>
              <Label htmlFor="monthlySavings" className="text-muted-foreground">
                How much can you save monthly? (₹)
              </Label>
              <Input
                id="monthlySavings"
                type="number"
                placeholder="Enter monthly amount in rupees"
                value={monthlySavings}
                onChange={(e) => setMonthlySavings(e.target.value)}
                className="border focus:border-primary"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="group-saving"
                checked={isGroupSaving}
                onCheckedChange={setIsGroupSaving}
              />
                  <Label htmlFor="group-saving" className="text-muted-foreground">
                Is this a group saving goal?
              </Label>
            </div>
            {isGroupSaving && (
              <>
                <div>
                  <Label htmlFor="groupSize" className="text-muted-foreground">
                    How many friends are in your saving group?
                  </Label>
                  <Input
                    id="groupSize"
                    type="number"
                    min="2"
                    placeholder="Enter the number of friends"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    className="border focus:border-primary"
                    required
                  />
                </div>
                {groupMembers.map((member, index) => (
                  <div key={index}>
                    <Label htmlFor={`member-${index}`} className="text-muted-foreground">
                      Member {index + 1} Name
                    </Label>
                    <Input
                      id={`member-${index}`}
                      type="text"
                      placeholder={`Enter member ${index + 1} name`}
                      value={member.name}
                      onChange={(e) => handleMemberNameChange(index, e.target.value)}
                      className="border focus:border-primary"
                      required={isGroupSaving}
                    />
                  </div>
                ))}
              </>
            )}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Your Journey
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}