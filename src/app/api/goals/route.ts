// src/app/api/goals/route.ts
import { NextResponse } from 'next/server';
import { setItem, getItem } from '../../../utils/localStorage';

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the request body
    const { savingFor, goalAmount, monthlySavings, isGroupSaving, groupSize } = body;

    // Validate the request body
    if (!savingFor || !goalAmount || !monthlySavings) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Fetch existing goals from localStorage
    const savedGoals = getItem("savingsGoals") || [];

    // Add the new goal
    const newGoal = {
      saving_for: savingFor,
      goal_amount: goalAmount,
      monthly_savings: monthlySavings,
      is_group_saving: isGroupSaving,
      group_size: isGroupSaving ? groupSize : null,
    };
    const updatedGoals = [...savedGoals, newGoal];

    // Save the updated goals to localStorage
    setItem("savingsGoals", updatedGoals);

    // Return a success response
    return NextResponse.json({ message: 'Goal saved successfully!', goal: newGoal }, { status: 200 });
  } catch (error) {
    console.error('Error saving goal:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const savedGoals = getItem("savingsGoals") || [];
    return NextResponse.json({ goals: savedGoals }, { status: 200 });
  } catch (error) {
    console.error('Error fetching goals:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}