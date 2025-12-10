"""
Simple test script to verify the FastAPI backend is working correctly
"""
import requests
import json

BASE_URL = "http://127.0.0.1:8000"

def test_health():
    """Test the health endpoint"""
    print("\n=== Testing Health Endpoint ===")
    try:
        response = requests.get(f"{BASE_URL}/health")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        return response.status_code == 200
    except Exception as e:
        print(f"Error: {e}")
        return False

def test_chat(question: str):
    """Test the chat endpoint"""
    print(f"\n=== Testing Chat Endpoint ===")
    print(f"Question: {question}")
    try:
        response = requests.post(
            f"{BASE_URL}/chat",
            json={"question": question},
            timeout=30
        )
        print(f"Status Code: {response.status_code}")
        data = response.json()
        print(f"Response: {json.dumps(data, indent=2)}")
        print(f"\nAnswer: {data.get('answer', 'No answer')}")
        return response.status_code == 200
    except requests.Timeout:
        print("Error: Request timed out")
        return False
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    print("=" * 60)
    print("FastAPI Backend Test Script")
    print("=" * 60)
    
    # Test health
    health_ok = test_health()
    
    if not health_ok:
        print("\n❌ Health check failed. Is the server running?")
        print("Start it with: python api/index.py")
        exit(1)
    
    print("\n✅ Health check passed!")
    
    # Test various questions
    test_questions = [
        "What is step next on the system",
        "What is Tapnex?",
        "Tell me about Prabhav's AI experience",
        "What skills does Prabhav have?"
    ]
    
    for question in test_questions:
        success = test_chat(question)
        if success:
            print("✅ Test passed")
        else:
            print("❌ Test failed")
    
    print("\n" + "=" * 60)
    print("Testing complete!")
    print("=" * 60)