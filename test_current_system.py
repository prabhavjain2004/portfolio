#!/usr/bin/env python3
"""Test the current deployed system"""

import requests
import time

def test_system():
    base_url = "https://portfolio-ewg9.onrender.com"
    
    print("🔄 Testing current deployed system...")
    
    # Test 1: Health check
    try:
        print("\n1. Health Check...")
        response = requests.get(f"{base_url}/health", timeout=10)
        print(f"   Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"   RAG enabled: {data.get('rag_enabled')}")
            print("   ✅ Health check passed")
        else:
            print("   ❌ Health check failed")
            return False
    except Exception as e:
        print(f"   ❌ Health check error: {e}")
        return False
    
    # Test 2: Warmup (if available)
    try:
        print("\n2. Warmup Test...")
        response = requests.get(f"{base_url}/warmup", timeout=60)
        print(f"   Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"   Warmup result: {data.get('message', 'No message')}")
            print("   ✅ Warmup completed")
        else:
            print("   ⚠️  Warmup endpoint not available (deploy needed)")
    except Exception as e:
        print(f"   ⚠️  Warmup error: {e}")
    
    # Test 3: Chat with timeout handling
    try:
        print("\n3. Chat Test...")
        payload = {"question": "What is Tapnex?"}
        
        print("   Sending request (may take 30-60 seconds for first request)...")
        start_time = time.time()
        
        response = requests.post(f"{base_url}/chat", json=payload, timeout=90)
        
        end_time = time.time()
        duration = end_time - start_time
        
        print(f"   Status: {response.status_code}")
        print(f"   Duration: {duration:.1f} seconds")
        
        if response.status_code == 200:
            data = response.json()
            answer = data.get('answer', '')
            
            if 'error' in answer.lower() or 'sorry' in answer.lower():
                print(f"   ❌ Backend error: {answer[:100]}...")
                return False
            else:
                print(f"   ✅ Success: {answer[:100]}...")
                return True
        else:
            print(f"   ❌ Chat failed: {response.text}")
            return False
            
    except requests.exceptions.Timeout:
        print("   ❌ Request timed out (system may still be initializing)")
        return False
    except Exception as e:
        print(f"   ❌ Chat error: {e}")
        return False

if __name__ == "__main__":
    success = test_system()
    if success:
        print("\n🎉 System is working!")
    else:
        print("\n💥 System needs attention")
        print("\nTroubleshooting:")
        print("1. Wait 2-3 minutes and try again (first request is slow)")
        print("2. Check Render logs for errors")
        print("3. Verify environment variables are set")